

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('text'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="text" id="text" placeholder="Enter Your Message..." /><br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email..." /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;