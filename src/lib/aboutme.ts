import { allAboutMes } from 'contentlayer/generated'

export const getAboutMe = () => {
    const aboutMe = allAboutMes.at(0)

    if (!aboutMe) throw new Error(`No AboutMe found`)

    return aboutMe
}
