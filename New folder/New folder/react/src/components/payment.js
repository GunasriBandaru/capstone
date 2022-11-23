import React, { Component } from 'react';
import './payment.css';
import { useHistory } from 'react-router';
import payment from '../images/Payment.png';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    cartAddItem,
    cartRemoveItem,
  } from '../redux/cart.action';
  import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal
  } from '../redux/cart.selector';


const Payment=({cartTotal})=> {
    const history = useHistory();
  

        return (
			<>
			<div className="box">
            <div className="carddetails">
			<div class="paycontainer">
				<div class="paymain-content">
					<p class="paytext">Pay Now</p>
				</div>

				<div class="paycentre-content">
				<h6 class="payprice">{cartTotal}<span>/-</span></h6>
				</div>
				<div class="paycard-details">
				<p>Pay using Credit or Debit card</p>
        		<form onSubmit={() => history.push('/paymentsucessful')}>
					<div class="paycard-number">
					<div>
					<label> Card Number </label>
					</div>
					<div className="payment-fields">
					<input required
						type="text"
						class="paycard-number-field"
						placeholder="###-###-###"/>
					</div>
					</div>
					<br />
					<div class="paycard-number">
					<label> Expiry Date </label>
					<div className="payment-fields">
					<input required type="text" class="date-number-field"
							placeholder="DD-MM-YY" />
					</div>
					</div>
					<br />
					<div class="paycard-number">
					<label> CVV number </label>
					<div className="payment-fields">
					<input required type="text" class="cvv-number-field"
							placeholder="xxx" />
					</div>
					</div>
					<br />
					<div class="paycard-number">
					<label> Card Holder name </label>
					<div className="payment-fields">
					<input required
						type="text"
						class="paycard-name-field"
						placeholder="Enter your Name"/>
					</div>
					</div>
					<br />
					<button required type="submit" class="paysubmit-now-btn" 
					>
					submit
					</button>
        		</form>
				</div>
			</div>
			
    	</div>
		<div>
		<img className="paymentimage" src={payment} alt="payment" height="550px" width="400px" />
		</div>
		</div>
		</>
        );
    }

    const mapStateToProps=createStructuredSelector(
        {
            cartCount:selectCartItemsCount,
            cartList:selectCartItems,
            cartTotal:selectCartTotal,
        }
    );
    
    export default connect(mapStateToProps)(Payment);

// export default Payment;