import { useState } from "react";


const ProductForm = ({ handleProducts }) => {
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('clicked');
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity =e.target.quantity.value 
        // console.log(name, price, quantity);
        if(name.length === 0 || name === ""){
            setError('Please provide a valid product Name')
            return
        }
        else if(price.length === 0 || price < 0 || price === ''){
            setError('Please Enter a Price ')
            return
        }else if(quantity === 0 || quantity < 0 || quantity === ''){
            setError('Please Enter a Quantity')
            return
        }else{
            setError('')
        }
        const newProduct = {
            name, 
            price, 
            quantity
        }
        console.log(newProduct);
        handleProducts(newProduct)
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
            <strong style={{color: 'red'}}>{error}</strong>
        </div>
    );
};

export default ProductForm;