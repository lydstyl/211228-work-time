import useClickDatesWithContext from "../hooks/useClickDatesWithContext"

export default function ClearLocalClickDates() {
    const { setClickDates } = useClickDatesWithContext()

    const handleClick = () => {
        const response = confirm("Are you sure you want to clear all ?")
        if (!response) return

        setClickDates([])
        localStorage.removeItem("localClickDates")
    }

    return <button onClick={handleClick}>CLEAR</button>
}
