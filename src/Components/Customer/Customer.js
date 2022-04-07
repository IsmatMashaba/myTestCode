import React from 'react';

const Customer = (props) => {
    const {firstName,lastName,orders} = props.send

    
    let newQuantity = orders.reduce((acc, obj) => {
        return acc + obj.items.reduce((acc, obj) => {
            return acc + obj.quantity;
        }, 0);
    }, 0);
    let newPrice = orders.reduce((acc, obj) => {
        return acc + obj.items.reduce((acc, obj) => {
            return acc + obj.price;
        }, 0);
    }, 0);


    return (
        <div>
            <h1>Name: {firstName} {lastName}</h1>
       <h2>Total quantity : {newQuantity}</h2>
       <h2>Total price : ${newPrice.toFixed(2)}</h2>
        </div>
    );
};

export default Customer;