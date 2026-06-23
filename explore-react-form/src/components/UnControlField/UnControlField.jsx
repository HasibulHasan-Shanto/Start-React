import { useRef } from "react";

const UnControlField = () => {
    const email = useRef('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit done: ', email.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={email} type="email" name="email" id="email" placeholder="Enter Your Email..." required /><br />
                <input type="password" name="password" id="password" placeholder="Enter Your Password..." required /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlField;