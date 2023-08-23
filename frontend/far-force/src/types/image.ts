interface ImageFormat {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: null,
    width: number,
    height: number,
    size: number,
    url: string
}

interface StrapiImage extends ImageFormat {
    alternativeText: string,
    caption: string,
    formats: {
        thumbnail: ImageFormat
    },
    previewUrl: string,
    provider: string,
    provider_metadata: null,
    createdAt: string,
    updatedAt: string
}
