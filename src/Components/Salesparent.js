import React from "react";
import Sales from "./Sales";
import Sales_master from "./sales_master";
import './SalesParent.css'
import Sales_preview from "./Sales_preview";

function Salesparent(props) {


  

    return (<div style={{paddingLeft:"8vw"}}>
    
        <div id="parent" className="rowC"> <Sales className="Sales"/> <Sales_preview className="preview"/>  </div>
             <div><Sales_master/></div>
    </div>);

}


export default Salesparent;