import { use, useState } from "react";
import Bottle from "./Bottle";


const Bottles = ({ fetchBottle }) => {
    const bottles = use(fetchBottle)
    // console.log(bottles)
    const [cart, setCart] = useState([])
    const handleAddToCart = (bottle) => {
        console.log('add to cart done', bottle)
    }
    return (
        <div>
           <h1>
            All bottles are here and bottles length: {bottles.length}
           </h1>
           {
                bottles.map(bottle => <Bottle
                    key={bottles.id}
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                ></Bottle>)
           }
        </div>
    );
};

export default Bottles;