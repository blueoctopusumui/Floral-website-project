import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Checkout({bouquet}){
    let total=0;
    for(let i=0;i<bouquet.length;i++)
    {
        const flower=bouquet[i];
        total=total + (flower.price * flower.quantity);
    }
    return(
        <div className="checkout-page">
            <div className="receipt-card">
                <div className="receipt-header">
                    <h1>Order Summary</h1>
                    <p>Thank you for choosing Hawaaian Floral Studio :) </p>
                </div>
                <div className="receipt-body">
                    {bouquet.length===0?(
                        <p className="empty-state">Your bouquet is empty :(</p>
                    ):
                    (
                        bouquet.map((f,i)=>(
                            <div key={i} className="receipt-item">
                                <span>{f.name} x {f.quantity}</span>
                                <span>{f.price * f.quantity}</span>
                            </div>
                        )
                    ))
                    }
                </div>

                <div className="receipt-total">
                    <span>Total:</span>
                    <span>{total}</span>
                </div>

                <div className="receipt-actions" style={{marginTop:"32px"}}>
                    <Link to="/" className="btn btn-secondary">Back to Builder</Link>
                    <button className="btn" disabled={bouquet.length===0} onClick={()=>alert("Order Confirmed!!!")}>Confirm Order</button>
                </div>
            </div>
        </div>
    );
}

Checkout.propTypes={
    bouquet: PropTypes.array.isRequired,
};

export default Checkout;