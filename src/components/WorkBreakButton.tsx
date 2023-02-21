import { ClickDate } from "../types/types"
import useClickDatesWithContext from "../hooks/useClickDatesWithContext"

function WorkBreakButton() {
    const { clickDates, setClickDates } = useClickDatesWithContext()

    const handleClick = () => {
        const now = new Date()

        const newClickDate: ClickDate = {
            id: now.getTime(),
            date: now,
            hour: `${now.getHours()}H${now.getMinutes()}`,
            isWork: clickDates.length % 2 === 0,
        }

        const newClickDates = [...clickDates, newClickDate]

        localStorage.setItem("localClickDates", JSON.stringify(newClickDates))

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
