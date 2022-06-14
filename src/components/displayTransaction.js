import React from "react";
import  '../css/displayTransaction.css'
function  DisplayTransaction(props){
    return (
        <div>
            {props.list.map((item)=>(
                <div>
                 <div className="transaction-item">
                    <div>
                    <h1>{item.amount}</h1>
                    </div>
                    <div>
                    <h1>{item.item}</h1>
                    </div>
            
                 </div>
                </div>
            ))}
            </div>
        
    )
}

export default DisplayTransaction;