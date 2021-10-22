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

export const updCurrUserProfile = (attrs: ProfileAttrs) => from('profiles').upsert({ ...attrs, id: auth.user()!.id, updated_at: new Date()})

export const updCurrUserAvatar = async (file: File) => {
    const user = auth.user()
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.id}${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    let { error: uploadError } = await fromBucket('avatars').upload(filePath, file)
    if (uploadError) { throw uploadError }

    return await from('profiles').upsert({ id: auth.user()!.id, avatar_url: filePath })
}

export const getAvatar = async(url: string) => {
    const { data, error: downloadError } = await fromBucket('avatars').download(url)
    if (downloadError) { throw downloadError }

    return URL.createObjectURL(data)
}
