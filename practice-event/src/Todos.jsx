import { use } from "react"
import Todo from "./Todo"

export default function Todos({ postsPromise }) {
    const posts = use(postsPromise)
    console.log(posts)
    return (
        <>
            <div>
                <h1>this is todos</h1>
            </div>
            {
                posts.map(post => <Todo key={post.id} post={post}></Todo>)
            }
        </>
    )
}

// body
// :
// "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id
// :
// 1
// title
// :
// "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId
// :
// 1