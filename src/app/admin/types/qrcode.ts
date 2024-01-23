export interface QrCode {
    id: string
    url:string
    createdDate: number
    redirectUrl:string
    nameEnterprise:string
    type: 'links' | 'gmn'
}