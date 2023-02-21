import { ClickDate } from "../types/types"

type ClearLocalProps = {
    setClickDates: (clickDates: ClickDate[]) => void
}

export default function ClearLocalClickDates(props: ClearLocalProps) {
    const handleClick = () => {
        props.setClickDates([])

        localStorage.removeItem("localClickDates")
    }

    return <button onClick={handleClick}>Clear local click dates</button>
}
