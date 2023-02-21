import { useState } from "react"

import "./App.css"
import { ClickDate } from "./types/types"
import WorkBreakButton from "./components/WorkBreakButton"
import Dashboard from "./components/Dashboard"
import ClickDates from "./components/ClickDates"
import ClearLocalClickDates from "./components/ClearLocalClickDates"

function App() {
    const localDates = localStorage.getItem("localClickDates")
    let initialDates = []
    if (localDates) {
        initialDates = JSON.parse(localDates)
    }

    const [clickDates, setClickDates] = useState<ClickDate[]>(initialDates)

    return (
        <div className="App">
            <header>
                <WorkBreakButton
                    clickDates={clickDates}
                    setClickDates={setClickDates}
                />

                <Dashboard clickDates={clickDates} />
            </header>

            <ClickDates clickDates={clickDates} />

            <ClearLocalClickDates setClickDates={setClickDates} />

            <footer>
                <pre>{JSON.stringify(clickDates, null, 4)}</pre>
            </footer>
        </div>
    )
}

export default App
