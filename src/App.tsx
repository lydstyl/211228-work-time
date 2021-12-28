import { useState } from "react"
// import logo from "./logo.svg"
import "./App.css"

interface ClickDate {
    id: number
    date: Date
    hour: string
    isWork: boolean
}

function App() {
    const [clickDates, setClickDates] = useState<ClickDate[]>([])

    const buttonText = clickDates.length % 2 === 0 ? "WORK" : "BREAK"

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

    return (
        <div className="App">
            <header>
                <div className="dashboard">Dashboard</div>

                <button type="button" onClick={handleClick}>
                    {buttonText}
                </button>
            </header>

            <div className="click-dates">
                {clickDates.map(cd => (
                    <p className="click-date">
                        {cd.hour} {cd.isWork ? "WORK" : "BREAK"}
                    </p>
                ))}
            </div>

            <footer>
                <pre>{JSON.stringify(clickDates, null, 4)}</pre>
            </footer>
        </div>
    )
}

export default App
