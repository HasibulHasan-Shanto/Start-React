import { use } from "react"
import Map2 from "./Map2"
export default function Map() {
    const friends = [
        { name: 'shanto', position: 'Frontend Developer' },
        { name: 'sifat', position: 'Backend Developer' },
        { name: 'salman', position: 'Full Stack Developer' },
        { name: 'mahidul', position: 'UI Designer' }
    ]
    const users = [
        { id: 1, userName: "Shanto", age: 22 },
        { id: 2, userName: "Sifat", age: 21 },
        { id: 3, userName: "Salman", age: 23 }
    ]
    const users1 = [
        { id: 1, pName: "Shanto", isPremium: true },
        { id: 2, pName: "Sifat", isPremium: false },
        { id: 3, pName: "Salman", isPremium: true }
    ]
    const users2 = [
        { id: 1, userName2: "Shanto", active: true },
        { id: 2, userName2: "Sifat", active: false },
        { id: 3, userName2: "Salman", active: true },
        { id: 4, userName2: "Mahidul", active: false }
    ]
    return (
        <>
            {/* <div className="dev">
                {
                    friends.map(friend => <Map2 devName={friend.name} position={friend.position}></Map2>)
                }
            </div>

            <div className="dev">
                {
                    users.map(user => <Map2 userName={user.userName} userAge={user.age}></Map2>)
                }
            </div>
            <div className="dev">
                {users1.map(user => <Map2 pName={user.pName} isPremium={user.isPremium}></Map2>)}
            </div> */}
            <div>
                {
                    users2.filter(user => user.active).map(user => <Map2 userName2={user.userName2} active={user.active}></Map2>)
                }
            </div>
        </>
    )
}
// { friend }