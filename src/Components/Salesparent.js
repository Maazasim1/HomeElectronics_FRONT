import React from "react";
import Sales from "./Sales";
import SalesMaster from "./sales_master";
import './SalesParent.css'
import SalesPreview from "./Sales_preview";

function Salesparent(props) {


  

    return (<div style={{paddingLeft:"8vw"}}>
    
        <div id="parent" className="rowC"> <Sales className="Sales"/> <SalesPreview className="preview" props={"change"}/>  </div>
             <div><SalesMaster/></div>
    </div>);

}


export default Salesparent;