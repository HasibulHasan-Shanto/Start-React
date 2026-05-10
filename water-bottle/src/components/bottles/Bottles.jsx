import { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addItemLocalStorage, getCartFromLocalStorage } from "../../utilities/LocalStorage";
// import Cart from "../cart/Cart";


const Bottles = ({ fetchBottle }) => {
    const bottles = use(fetchBottle)
    // console.log(bottles)
    const [cart, setCart] = useState([])
    const handleAddToCart = (bottle) => {
        // console.log('add to cart done', bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
        addItemLocalStorage(bottle.id)
    }
    useEffect(()=>{
        const storedCartIds = getCartFromLocalStorage()
        const storedCart = [];
        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        console.log('store', storedCart);
        setCart(storedCart); 
    }, [bottles])
    return (
        <div>
            <h1>
                All bottles are here and bottles length: {bottles.length}
            </h1>
            <p>
                Add to cart : {cart.length}
            </p>
            {/* <Cart cart={cart}></Cart> */}
            <div className="card-2">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;