import { Component, createSignal, createEffect, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Title } from 'solid-meta'
import { UserCredentials } from '@supabase/supabase-js'
import DefaultLayout from '~/layouts/Default';
import Spinner from '~/components/Spinner'
import { auth } from '~/lib/supabase'
import { handleAlert } from '~/lib/alert'

type AuthActionLabel = 'Sign In' | 'Sign Up'

const Auth: Component = () => {
    // local state - atoms
    const [ isLogIn, setIsLogIn ] = createSignal<boolean>(true)
    const [ loading, setLoading ] = createSignal<boolean>(false)
    const [ currActionLabel, setCurrActionLabel ] = createSignal<AuthActionLabel>('Sign In')
    // local form state
    const [fields, setFields] = createStore<UserCredentials>({email: '', password: ''});

    // local computed state. not absolutely needed, but the value is used more than once, so let's compute it
    createEffect(() => { isLogIn() ? setCurrActionLabel('Sign In') : setCurrActionLabel('Sign Up')})

    // Supabase - Auth method
    const signInOrSignUp = async (payload: UserCredentials) => {
        try {
          setLoading(true)
          const { error } = isLogIn() ? await auth.signIn(payload) : await auth.signUp(payload)
          if (error) {
            handleAlert({ type: 'error' , text: error.message})
          }
          else {
              handleAlert({ type: 'success' , text: isLogIn() ? `Log in successful. I'll redirect you soon...` : `Signup successful. Please check your inbox for a confirmation email!` })
          }
        } catch (error) {
            handleAlert({ text: error.error_description || error, type: 'error' })
        } finally {
          setLoading(false)
        }
    }

    // local callbacks invoked through DOM interactions
    const handleSubmit = (e) => {
        signInOrSignUp(fields)
        e.preventDefault()
    };
    const handleChange = (e) => setFields(e.currentTarget.name, e.currentTarget.value)
    const toggleAuth = (e) => {
        e.preventDefault()
        setIsLogIn((isLoggedIn) => !isLoggedIn)
    }

    return (
    <DefaultLayout>
        <Title>Profile</Title>
            <h1 class="text-4xl font-semibold text-blue-900 w-full text-center mb-2 mt-16">
                {currActionLabel}
            </h1>
            <div className="h-full flex flex-col justify-center items-center">
                <form class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100" onSubmit={handleSubmit}>
                    <div class="card-body">
                        <div className="form-controls">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" name="email" class="input input-bordered" required placeholder="email" onInput={handleChange} />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" name="password" class="input input-bordered" required placeholder="password"  onInput={handleChange} />
                                <label class="label h-8">
                                    <Show when={isLogIn()}>
                                        <a href="#" class="label-text-alt">Forgot password?</a>
                                    </Show>
                                </label>
                            </div>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary" disabled={loading()}>{currActionLabel}</button>
                        </div>
                        <label class="label inline-block text-center w-full">
                            <a href="#" class="label-text-alt" onClick={toggleAuth}>{isLogIn() ? `Don't have an account? Sign Up` : `Already have an account? Sign In`}</a>
                        </label>
                    </div>
                </form>

                <div className="mt-6 h-12 w-12 relative">{loading() && <Spinner size="lg"/>}</div>
            </div>
    </DefaultLayout>
)};

export default Auth;
