import { use } from "react";
import Bottle from "./Bottle";


const Bottles = ({ fetchBottle }) => {
    const bottles = use(fetchBottle)
    console.log(bottles)
    return (
        <div>
           <h1>
            All bottles are here and bottles length: {bottles.length}
           </h1>
           {
                bottles.map(bottle => <Bottle
                    key={bottles.id}
                    bottle={bottle}
                ></Bottle>)
           }
        </div>
    );
};

export default Bottles;