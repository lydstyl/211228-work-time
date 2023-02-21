import useClickDatesWithContext from "../contexts/useClickDatesWithContext"

export default function ClearLocalClickDates() {
    const { setClickDates } = useClickDatesWithContext()

    const handleClick = () => {
        setClickDates([])

        localStorage.removeItem("localClickDates")
    }

    return <button onClick={handleClick}>Clear local click dates</button>
}
