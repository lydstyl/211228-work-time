import { ClickDate } from "../types/types"

interface Props {
    clickDates: ClickDate[]
}

function ClickDates(props: Props) {
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
