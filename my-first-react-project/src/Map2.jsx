export default function Map2({ devName, position, userName, userAge, pName, isPremium, userName2, active }) {
    return (
        <>
            {/* <h1>
                Developer name: {devName}
            </h1>
            <strong>
                position: {position}
            </strong> */}

            {/* <div>
                <h3>
                    User Name: {userName}
                </h3>
                <strong>
                    Age: {userAge}
                </strong>
            </div> */}
            {/* <div>
                <p>
                    {isPremium ? ` ${pName}- Premium User` : ` ${pName}- Free User`}
                </p>
            </div> */}
            <div>
                <p>
                    {active ? ` ${userName2} - Active 🟢` : ` ${userName2} - Inactive 🔴`}
                </p>
            </div>
        </>
    )
}