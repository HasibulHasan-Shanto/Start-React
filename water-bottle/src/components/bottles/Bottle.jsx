
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    return (
        <div className="bottle-card">
            <img className="card-img" src={bottle.img} alt="" />
            <h2>
                {bottle.name}
            </h2>
            <div className="parent">
                <button onClick={() => { handleAddToCart(bottle)}} className="add-to">
                    Add to cart
                </button>
                <strong className="price">
                    ${bottle.price}
                </strong>
            </div>
            <p>
                Available: {bottle.stock}
            </p>
        </div>
    );
};

export default Bottle;

// category
// :
// "Bottle"
// id
// :
// "02871edc-272b-4e20-bcc2-b32681213b3c"
// img
// :
// "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg"
// name
// :
// "Steel Metal Bottle 2L"
// price
// :
// 37
// quantity
// :
// 0
// ratings
// :
// 4
// ratingsCount
// :
// 68
// seller
// :
// "Addidas"
// shipping
// :
// 27
// stock
// :
// 14