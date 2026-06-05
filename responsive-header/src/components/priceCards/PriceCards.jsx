import { use } from "react";
import Card from "../card/Card";

const PriceCards = ({ fetchPrice }) => {
    const priceCards = use(fetchPrice)
    console.log(priceCards);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {priceCards.map(card => <Card key={card.id} card={card}></Card>)}
        </div>
    );
};

export default PriceCards;