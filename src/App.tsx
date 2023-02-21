import "./App.css"
import clickDatesContext from "./contexts/clickDatesContext"
import useClickDates from "./hooks/useClickDates"
import WorkBreakButton from "./components/WorkBreakButton"
import Dashboard from "./components/Dashboard"
import ClickDates from "./components/ClickDates"
import ClearLocalClickDates from "./components/ClearLocalClickDates"

function App() {
    const { clickDates, setClickDates } = useClickDates()

    return (
        <clickDatesContext.Provider value={{ clickDates, setClickDates }}>
            <div className="App">
                <header>
                    <WorkBreakButton />

                    <Dashboard />

                    <ClearLocalClickDates />
                </header>

                <ClickDates />
            </div>
        </clickDatesContext.Provider>
    )
}

export default App
