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

    const getWorkingMinutes = (clickDates: ClickDate[]) => {
        let min = 0 // working minutes
        const workClickDates = clickDates.filter(cd => cd.isWork)
        workClickDates.forEach((wcd, index) => {
            if (index > 0) {
                min += (wcd.id - workClickDates[index - 1].id) / (1000 * 60)
            }
        })

        return min
    }

    const getWokringHours = (workingMinutes: number) =>
        `Work time: ${workingMinutes.toFixed(2)} minutes or ${(
            workingMinutes / 60
        ).toFixed(2)} hours`

    const buttonText = clickDates.length % 2 === 0 ? "WORK" : "BREAK"
    const workingMinutes = getWorkingMinutes(clickDates)
    const dashboardContent = getWokringHours(workingMinutes)

    return (
        <div className="App">
            <header>
                <button type="button" onClick={handleClick}>
                    {buttonText}
                </button>

                <div className="dashboard">{dashboardContent}</div>
            </header>

            <div className="click-dates">
                {clickDates.map(cd => (
                    <p key={cd.id} className="click-date">
                        {cd.hour}_>_{cd.isWork ? "WORK_>_" : "BREAK_>_"}
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
