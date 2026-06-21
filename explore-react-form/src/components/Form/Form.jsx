

const Form = () => {
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(e.target.text.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" id="text" placeholder="Enter Your Message..." /><br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email..."/><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;