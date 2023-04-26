export interface homeDataType {
    welcome_title: string
    welcome_note: string
    welcome_description: string
    cv_link: string
    user_image: string
}

export interface socialLinkType {
    name: string,
    link: string,
    icon: string
}

export interface aboutType {
    paragraph: string,
}

export interface experienceType {
    experience_inputs: {content:string}[]
    image: string
    title: string
    name: string
    start: string
    end: string
}

export interface projectType {
    tool: {name:string}[]
    title: string
    about: string
    cover: string
    link: string
}

export interface blogType {
    title: string
    cover: string
    link: string
}

export interface DocType {
    title: string
    link: string
}