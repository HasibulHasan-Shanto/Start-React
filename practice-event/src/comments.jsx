import { use } from "react"
import Comment from './Comment'

export default function Comments({ fetchComments }){
    const comments = use(fetchComments)
    console.log(comments)
    return (
        <div>
            <h1>
                All Comments Are Here.. {comments.length}
            </h1>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}