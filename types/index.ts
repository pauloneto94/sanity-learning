import { PortableTextBlock } from "sanity";

export type ProfileType = {
    _id: string,
    fullName: string,
    headline: string,
    profileImage: {
        alt: string,
        image: string
    },
    email: string,
    bio: PortableTextBlock[],
    location: string,
    resumeURL: string,
    socialLinks: string[],
    skills: string[],
}