
const ControlField = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit done ');
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Enter Your Email..." required/><br />
                <input type="password" name="password" id="password"  placeholder="Enter Your Password..." required/><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlField;