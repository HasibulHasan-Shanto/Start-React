import useInputField from "../../Hooks/useInputField";

const ShortCutForm = () => {
    const [email, emailOnChange] = useInputField('')
    const [name, nameOnChange] = useInputField('')
    const [pass, passOnChange] = useInputField('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Done: ',name, email, pass);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" onChange={nameOnChange} defaultValue={name} />
                <input onChange={emailOnChange} defaultValue={email} type="email" name="email" id="email" placeholder="Enter Your Email..." required /><br />
                <input onChange={passOnChange} defaultValue={pass} type="password" name="password" id="password" placeholder="Enter Your Password..." required /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ShortCutForm;