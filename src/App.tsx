import { useState } from "react"

import "./App.css"
import { ClickDate } from "./types/types"
import WorkBreakButton from "./components/WorkBreakButton"
import Dashboard from "./components/Dashboard"
import ClickDates from "./components/ClickDates"

function App() {
    const [clickDates, setClickDates] = useState<ClickDate[]>([])

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

            <footer>
                <pre>{JSON.stringify(clickDates, null, 4)}</pre>
            </footer>
        </div>
    )
}

export default App
