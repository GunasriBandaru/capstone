import React, { Component, useState } from 'react';
import './item.css'
import ButtonAddRemoveItem from '../ButtonAddRemoveItem';
import ButtonCartCount from '../ButtonCartCount';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../redux/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../redux/cart.selector';



const Item =({
    myState, 
    getcate,
    cartCount,
    cartList,
    cartAddItem,
    cartRemoveItem
}) =>{
    const {id,name,info,price,img}=getcate;
    const handleItemQuantity=()=>{
        let quantity=0;
        if(cartCount!==0){
            const foundItemInCart=cartList.find(item=>item.id===id)
            if(foundItemInCart){
                quantity=foundItemInCart.quantity;
            }
        }
        return quantity;
    }

        return (
            <div>
            <section>
            <div className="item">
                <img src={img} alt="item"/>
                <div className="item-head-desc">
                    <p className="head_desc-name">{name}</p>
                    {/* <p className="head_desc-info"><small>{info}</small></p> */}
                </div>
                <div className="item-foot_desc">
                    <span className="food_desc-price">Rs:{price}</span>
                    <ButtonAddRemoveItem 
                     quantity={handleItemQuantity()}
                     handleAddItem={()=>cartAddItem(getcate)}
                     handleRemoveItem={()=>cartRemoveItem(getcate)}
                     />
                </div>
            </div>
            </section>
            <div class="select">
                
            </div>
         </div>   
        );
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (item) => dispatch(cartAddItem(item)),
    cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Item);

