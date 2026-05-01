import { useState } from "react"

export default function BatsMan() {
    const [runs, SetRuns] = useState(0)
    const [four, SetFour] = useState(0)
    const [six, SetSix] = useState(0)
    const handleRun = () => {
        const newRun = runs + 1
        SetRuns(newRun)
    }
    const handleFour = () => {
        const newRun = runs + 4
        SetRuns(newRun)
        const newFour = four + 1
        SetFour(newFour)
    }
    const handleSix = () => {
        const newRun = runs + 6
        SetRuns(newRun)
        const newSix = six + 1
        SetSix(newSix)
    }
    return (
        <div className="dev2">
            <h1>Bangladeshi Player</h1>
            <p>
                Name: <strong>
                    Hasibul Hasan Shanto
                </strong>
            </p>
            <p>
                Run: {runs}
            </p>
            <p>
                Four:{four} Six: {six}
            </p>
            <button onClick={handleRun}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}