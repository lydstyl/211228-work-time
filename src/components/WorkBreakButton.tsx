import { ClickDate } from "../types/types"

interface WorkBreakButtonProps {
    clickDates: ClickDate[]
    setClickDates: (clickDates: ClickDate[]) => void
}

function WorkBreakButton(props: WorkBreakButtonProps) {
    const { clickDates, setClickDates } = props

    const handleClick = () => {
        const now = new Date()

        const newClickDate: ClickDate = {
            id: now.getTime(),
            date: now,
            hour: `${now.getHours()}H${now.getMinutes()}`,
            isWork: clickDates.length % 2 === 0,
        }

        const newClickDates = [...clickDates, newClickDate]

        setClickDates(newClickDates)
    }

    const buttonText = clickDates.length % 2 === 0 ? "WORK" : "BREAK"

    return (
        <button type="button" onClick={handleClick}>
            {buttonText}
        </button>
    )
}

export default WorkBreakButton
