export type IList = {
    id: number,
    name: string
}
export type IDetails = {
    id: number,
    name: string,
    avatar: string,
    details: {
        city: string,
        company: string,
        position: string
    }
}