export interface Note {
    id: number,
    note: string,
    isFavorite: boolean,
    createdAt: Date,
    category: {
        name: string
    } | null
}