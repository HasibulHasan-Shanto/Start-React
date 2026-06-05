import Feauture from "../feauture/Feauture";

const Card = ({ card }) => {
    return (
        <div className="bg-red-400 p-6 rounded-2xl border-2 shadow-lg text-center">
            <h4 className="text-xl font-bold">
                {card.name}
            </h4>
            <h1 className="text-5xl font-bold">
                {card.price}
            </h1>
            <strong>
                {card.duration}
            </strong>
            <p>
                {card.description}
            </p>
            {card.features.map((feature, index) => <Feauture key={index} feature={feature}></Feauture>)}
        </div>
    );
};

export default Card;