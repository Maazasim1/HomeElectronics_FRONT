import React, {useState} from 'react';
import {useEffect} from "react";
import './forms.css'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import './Sales_preview.css'





export var reRender={reRender:""}


function Sales_preview(props){


    useEffect(() => {
        actions.TableString.StringOfTable="Bill_Child_Temp";
        console.log('Updating Sales_preview')
        props.fetchAllPos();
    }, [reRender.reRender]);


    return(
        <div className="table1" style={{"background":"transparent"}}>
            {console.log(props.poslist)}
        {props.poslist.map((record, index) => {
            return (<ul className="list-group" key={index} style={{"background":"transparent"}}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{"background":"transparent"}}>
              {record.ItemBrand}{" "}
                {record.ItemType}{" "}
                {record.ItemSKU}{" "}
                {"Quantity : "}{record.ItemQuantity}{" "}
                <span className="badge bg-primary rounded-pill">{record.ItemQuantity * record.ItemPrice}{" PKR"}</span>
                </li>
            </ul>);
        })}
        </div>
    );
}


const mapStateToProps = state=>({
        poslist: state.pos.list  
})

const mapActionToProps =  {
    fetchAllPos: actions.fetchall
}

export default connect(mapStateToProps,mapActionToProps)(Sales_preview);
