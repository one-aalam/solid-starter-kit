import { Component, createEffect, createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useRouter } from 'solid-app-router'
import { User } from '@supabase/supabase-js'
import { auth } from '~/lib/supabase'

type AuthStore = [
  { user: User },
  { signOut?: () => void; }
];

const AuthContext = createContext<AuthStore>([{ user: null }, {}]);

export const AuthProvider: Component = (props) => {
    const [ state ] = createStore({ user: auth.user() || null })
    const [, { replace } ] = useRouter()
    const store: AuthStore = [
        state,
        {
            async signOut() {
                await auth.signOut()
                replace('/auth')
            }
        }
    ];

    createEffect(() => { !state.user && replace('/auth')})

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
