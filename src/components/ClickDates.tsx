import { ClickDatesProps } from "../types/types"

function ClickDates(props: ClickDatesProps) {
    const { clickDates } = props
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
