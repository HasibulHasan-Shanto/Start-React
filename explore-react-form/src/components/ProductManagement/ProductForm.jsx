

const ProductForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('clicked');
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity =e.target.quantity.value 
        // console.log(name, price, quantity);
        const newProduct = {
            name, 
            price, 
            quantity
        }
        console.log(newProduct);
    }
    return (
        <div>
            <h1>
                product form
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Product Name" /><br />
                <input type="text" name="Price" id="price" placeholder="Product Price" /><br />
                <input type="text" name="quantity" id="quantity" placeholder="Product Quantity" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;