import { auth, from, fromBucket } from '~/lib/supabase'

export type ProfileAttrs = {
    username?: string,
    // bio?: string,
    website?: string,
    // twitter_handle?: string
    avatar_url?:string,
}

const GET_COL_SET = `username, website, avatar_url`

export const getUserProfile = (id: string) => from('profiles').select(GET_COL_SET).eq('id', id).single()
export const getCurrUserProfile = () => getUserProfile(auth.user()!.id)

export const getAvatar = async(url: string) => {
    const { data, error: downloadError } = await fromBucket('avatars').download(url)
    if (downloadError) { throw downloadError }

    return URL.createObjectURL(data)
}
