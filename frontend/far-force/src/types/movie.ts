export interface Movie {
    title: string
    rating: number
    image: { data: Base<StrapiImage> }
}