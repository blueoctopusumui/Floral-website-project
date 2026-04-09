import {Component} from "react";
import PropTypes from "prop-types";
class BouquetPreview extends Component{
    componentDidMount(){
        console.log("BouquetPreview mounted with",this.props.bouquet.length,"flowers");
    }

    componentWillUnmount(){
        console.log("BouquetPreview unmounted");
        document.title = "Hawaaian Floral Studio";
    }

    render()
    {
        const bouquet=this.props.bouquet;
        const { clearBouquet, removeOne } = this.props;
        
        let total=0;
        let bouquetCount = 0;
        for(let i=0; i<bouquet.length; i++){
            total += (bouquet[i].price * bouquet[i].quantity);
            bouquetCount += bouquet[i].quantity;
        }

        let content;

        if(bouquet.length===0)
        {
            content=<p>No flowers selected :(</p>
        }

        else{
            content= (
            <div>
                {bouquet.map((flower,i)=>(
                    <div key={i} className="bouquet-item">
                        <img src={flower.image} alt={flower.name} width="100" />
                        <div className="bouquet-item-info">
                            <p>{flower.name}</p>
                            <span className="item-quantity">Qty: {flower.quantity}</span>
                        </div>
                        <div className="bouquet-item-price-group">
                            <span className="bouquet-item-price">{flower.price * flower.quantity}</span>
                            <button 
                                className="remove-item-btn" 
                                onClick={() => removeOne(flower.id)}
                                title="Remove one"
                            >
                                −
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            );
        }
        return(
        <div className="bouquet-preview-container">
        <h2> Your Bouquet
        <span className="bouquet-count">{bouquetCount}</span>
        </h2>
        {content}
        <div className="bouquet-controls">
            <div className="total-summary">
                <span>Total:</span>
                <span>{total}</span>
            </div>
            <button className="btn btn-secondary" onClick={clearBouquet}>Clear Bouquet</button>
        </div>
        </div>
    );
    }
}

BouquetPreview.propTypes={
    bouquet: PropTypes.array.isRequired,
    clearBouquet: PropTypes.func,
    removeOne: PropTypes.func,
};

export default BouquetPreview;