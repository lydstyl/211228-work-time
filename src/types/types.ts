export interface ClickDate {
    id: number
    date: Date
    hour: string
    isWork: boolean
}

export interface ClickDatesProps {
    clickDates: ClickDate[]
}
