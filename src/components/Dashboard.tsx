import useClickDatesWithContext from "../hooks/useClickDatesWithContext"
import { ClickDate } from "../types/types"

function Dashboard() {
    const { clickDates } = useClickDatesWithContext()

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

    const getWokringHours = (workingMinutes: number) => (
        <p>
            <span>Work time: {workingMinutes.toFixed(2)} minutes or </span>
            <span className="hours">{`${(workingMinutes / 60).toFixed(
                2
            )} hours`}</span>
        </p>
    )

    const workingMinutes = getWorkingMinutes(clickDates)
    const dashboardContent = getWokringHours(workingMinutes)

    return <div className="dashboard">{dashboardContent}</div>
}

export default Dashboard
