import React, { Component } from 'react';
import Menulist from '../menu/menulist';
import EmptyCart from './Emptycart';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './cart.css';
import {
    cartAddItem,
    cartRemoveItem,
  } from '../redux/cart.action';
  import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal
  } from '../redux/cart.selector';


const Cart = ({cartCount, cartList,cartTotal}) =>{
    console.log(cartCount, cartList,cartTotal);
    const history = useHistory();
    // const {id,name,info,price,img}=getcate;
    return(
        <>
        
        {cartCount===0 ? (
             <EmptyCart />
        ):(
            <div className="cart">
        <div className="orders">
            <h1 className="orders-heading">your orders</h1>
            <div className="orders-menu">
                {/* <Menulist list={cartList} /> */}
                <main>
                {cartList.map((list) => (
                <div className="item">
                    <img src={list.img}/>
                    <div className="item-head-desc">
                    <p className="head_desc-name">{list.name}</p>
                    </div>
                    <div className="item-foot_desc">
                    <span className="food_desc-price">Rs:{list.price}</span> 
                    </div>
                     
                </div>
              ))}
                </main>
            </div> 
            <h3 className="orders-total">your total Rs:{cartTotal}</h3>
            <button type="submit" className="payment" onClick={() => history.push('/payment')} >
            Payment
            </button>
        </div>
        </div>
        )
    }
           
        
        
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

export default connect(mapStateToProps)(Cart);