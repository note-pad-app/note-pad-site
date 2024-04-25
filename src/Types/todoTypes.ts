export interface Todo {
    id?: number
    todo: string
    isCompleted?: boolean
    completedAt?: string | null
    isImportant: boolean
    remarks: string | null
    reminder: string | null
    category: object
}