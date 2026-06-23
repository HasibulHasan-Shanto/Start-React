import { useState } from "react";

const ControlField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit done ');
        if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }
        else {
            setError('')
        }
    }
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Enter Your Email..." required /><br />
                <input type="password" name="password" onChange={handleOnChange} defaultValue={password} id="password" placeholder="Enter Your Password..." required /><br />
                <input type="submit" value="submit" />
            </form>
            <p>
                <small>
                    {error}
                </small>
            </p>
        </div>
    );
};

export default ControlField;