import useClickDatesWithContext from "../hooks/useClickDatesWithContext"

export default function ClearLocalClickDates() {
    const { setClickDates } = useClickDatesWithContext()

    const handleClick = () => {
        setClickDates([])

        localStorage.removeItem("localClickDates")
    }

    return <button onClick={handleClick}>Clear local click dates</button>
}
