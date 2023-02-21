import "./App.css"
import WorkBreakButton from "./components/WorkBreakButton"
import Dashboard from "./components/Dashboard"
import ClickDates from "./components/ClickDates"
import ClearLocalClickDates from "./components/ClearLocalClickDates"
import useClickDates from "./hooks/useClickDates"
import clickDatesContext from "./clickDatesContext"

function App() {
    const { clickDates, setClickDates } = useClickDates()

    return (
        <clickDatesContext.Provider value={{ clickDates, setClickDates }}>
            <div className="App">
                <header>
                    <WorkBreakButton />

                    <Dashboard />
                </header>

                <ClickDates />

                <ClearLocalClickDates />
            </div>
        </clickDatesContext.Provider>
    )
}

export default App
