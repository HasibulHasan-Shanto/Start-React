export default function Todo({ post }) {
    const { userId, id, title, body } = post
    return (
        <>
            <div className="flex">
                <div className="card">
                    <h5>
                        Here is all todo id no: {id} and userId: {userId}
                    </h5>
                    <p>
                        Title: {title}
                    </p>
                    <p>
                        Body: {body}
                    </p>
                </div>
            </div>
        </>
    )
}