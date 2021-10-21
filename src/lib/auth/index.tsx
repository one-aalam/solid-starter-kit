import { Component, createEffect, createContext, useContext, createSignal, Accessor, onMount, onCleanup } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useRouter } from 'solid-app-router'
import { User, UserCredentials, Subscription } from '@supabase/supabase-js'
import { auth } from '~/lib/supabase'
import { handleAlert } from '~/lib/alert'

type AuthStore = [
  { user: User, loading: Accessor<boolean> },
  {
      signOut?: () => void,
      signInOrSignUp?:(payload: UserCredentials, isSignIn: boolean) => void
  }
];

const AuthContext = createContext<AuthStore>([{ user: null, loading() { return false }}, {}]);

export const AuthProvider: Component = (props) => {
    const [ loading, setLoading ] = createSignal<boolean>(false)
    const [ state, setState ] = createStore({ user: auth.user() || null, loading })
    const [{ location }, { replace } ] = useRouter()
    const store: AuthStore = [
        state,
        {
            async signOut() {
                await auth.signOut()
                replace('/auth')
            },
            // Supabase - Auth method
            async signInOrSignUp(payload: UserCredentials, isSignIn = true) {
                try {
                    setLoading(true)
                    const { error } = isSignIn ? await auth.signIn(payload) : await auth.signUp(payload)
                    if (error) {
                        handleAlert({ type: 'error' , text: error.message})
                    }
                    else {
                        if(payload.password?.length) {
                            handleAlert({ type: 'success' , text: isSignIn ? `Log in successful. I'll redirect you soon...` : `Signup successful. Please check your inbox for a confirmation email!` })
                            replace('/profile')
                        } else {
                            handleAlert({ type: 'success', text: `Please check your email for the magic link`})
                        }
                    }
                } catch (error) {
                    handleAlert({ text: error.error_description || error, type: 'error' })
                } finally {
                    setLoading(false)
                }
            }
        }
    ];
    let authStateSubscription: { data: Subscription } = null

    createEffect(() => { !state.user && replace('/auth')})

    onMount(() => {
        authStateSubscription = auth.onAuthStateChange(
            async (event, session) => {
              const user = session?.user! ?? null
              setState({ user })
              if(user && location === '/') {
                replace('/profile')
              }
            }
        )
    })
    onCleanup(() => {
        authStateSubscription.data.unsubscribe()
    })

    return (
        <AuthContext.Provider value={store}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
      throw new Error(
        'useAuth must be used within a AuthProvider'
      )
    }
    return context
}
