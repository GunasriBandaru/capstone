import React, { Component } from 'react';
import shipping from "../images/shipping.png";
import thankyou from "../images/thankyou.png";

class Notify extends Component {
    render() {
        return (
            <div class="paymentsucess">
             {/* <div>
		    <img className="paymentimage" src={thankyou} alt="payment" height="450px" width="400px" />
		    </div> */}
            <div class="paymentBody">
            <div className="mark">
            <i class="checkmark">✓</i>
            </div>
            <h1 className="paymentheader">Success</h1> 
            <p className="paymentPara">We received your purchase request;<br/> we'll be in touch shortly!</p>
            </div>
           
            </div>

        );
    }
}

export default Notify;