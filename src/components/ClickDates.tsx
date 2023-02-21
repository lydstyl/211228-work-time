import useClickDatesWithContext from "../hooks/useClickDatesWithContext"

function ClickDates() {
    const { clickDates } = useClickDatesWithContext()

    return (
        <div className="click-dates">
            {clickDates.map(cd => (
                <p key={cd.id} className="click-date">
                    {cd.hour} {cd.isWork ? "WORK" : "BREAK"}
                </p>
            ))}
        </div>
    )
}

export default ClickDates
