import './App.css'
export default function Comment({ comment }) {
    const { name, email, body} = comment
    return (
        <div className="card">
            <strong>
                Name: {name}
            </strong>
            <p>
                Email: {email}
            </p>
            <p>
                Body: {body}
            </p>
        </div>
    )
}