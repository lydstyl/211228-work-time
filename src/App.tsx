import { useState } from "react"
import "./App.css"

import WorkBreakButton from "./components/WorkBreakButton"

import { ClickDate } from "./types/types"

function App() {
    const [clickDates, setClickDates] = useState<ClickDate[]>([])

    const getWorkingMinutes = (clickDates: ClickDate[]) => {
        if (clickDates.length < 2) {
            return 0
        }

        let min = 0
        let clickDatesClone = [...clickDates]
        if (clickDates.length % 2 !== 0) {
            // odd or not peer
            clickDatesClone.pop()
        }

        for (let i = 1; i <= clickDatesClone.length; i = i + 2) {
            min +=
                (clickDatesClone[i].id - clickDatesClone[i - 1].id) /
                (1000 * 60)
        }

        return min
    }

    const getWokringHours = (workingMinutes: number) =>
        `Work time: ${workingMinutes.toFixed(2)} minutes or ${(
            workingMinutes / 60
        ).toFixed(2)} hours`

    const workingMinutes = getWorkingMinutes(clickDates)
    const dashboardContent = getWokringHours(workingMinutes)

    return (
        <div className="App">
            <header>
                <WorkBreakButton
                    clickDates={clickDates}
                    setClickDates={setClickDates}
                />

                <div className="dashboard">{dashboardContent}</div>
            </header>

            <div className="click-dates">
                {clickDates.map(cd => (
                    <p key={cd.id} className="click-date">
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
