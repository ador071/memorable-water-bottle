import './Bottle.css'
const Bottle = ({bottle, handlePurchase}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => {
                handlePurchase(bottle)
            }}>Purchase</button>
        </div>
    );
};

export default Bottle;