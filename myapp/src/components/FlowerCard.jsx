import PropTypes from "prop-types";

function FlowerCard({flower, onAdd})
{
    return(
        <div className="flower-card">
            <img src={flower.image} alt={flower.name} width="100" />
            <h3>{flower.name}</h3>
            <p className="price">{flower.price}</p>
            <button className="btn" onClick={()=>onAdd(flower)}>Add</button>
        </div>
    );
}

FlowerCard.propTypes={
    flower: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default FlowerCard