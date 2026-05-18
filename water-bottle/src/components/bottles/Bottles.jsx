import { use, useState } from "react";
import Bottle from "./Bottle";
import { addItemLocalStorage, getCartFromLocalStorage, removeFromLocalStorage } from "../../utilities/LocalStorage";
import Cart from "../cart/Cart";


const Bottles = ({ fetchBottle }) => {
    const bottles = use(fetchBottle);

    // ✅ initial state সরাসরি function দিয়ে set করা
    const [cart, setCart] = useState(() => {
        const storedCartIds = getCartFromLocalStorage();
        const storedCart = [];

        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        return storedCart;
    });

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addItemLocalStorage(bottle.id);
    };
    const handleRemoveFromCart = (id)=>{
        console.log('remove item successful', id);
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLocalStorage(id)
    }
    return (
        <div>
            <h1>
                All bottles are here and bottles length: {bottles.length}
            </h1>
            <p>
                Add to cart : {cart.length}
            </p>

            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="grid grid-cols-3 gap-4">
                {
                    bottles.map(bottle => (
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Bottles;