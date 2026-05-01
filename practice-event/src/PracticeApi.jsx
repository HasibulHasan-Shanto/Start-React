import { use } from "react"

export default function PracticeApi({ fetchUsers }) {
    const user = use(fetchUsers)
    console.log(user)
    return (
        <>
            <div className="dev2">
                <h1>
                    User: {user.length}
                </h1>
            </div>
        </>
    )
}