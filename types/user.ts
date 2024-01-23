export interface User {
    id: string
    email: string
    urlImage: string
    displayName: string
    idName: string
    colorTheme: string
    description: string
    urls: Urls[] | undefined
    createdDate: number
}

export interface Urls {
    type: 'instagram' | 'facebook' | 'GMN' | 'telefone' | 'whatsapp' | 'website' | 'email'
    url: string
    id: string
}