import React, {useState} from 'react';
import './forms.css'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import * as Sales_preview from './Sales_preview';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function Sales(props) {
   



   const intialvalues={

      itemBrand:'Haier',
      itemType:'AC',
      itemSKU:'123123',
      itemQuantity:'',
      itemPrice:'',
   }
   const [values,setValues] = useState(intialvalues);
   const [method,setMethod]=useState(["Bank Transfer"]);
   const [change,setChange]=useState(0);
   const [price,setPrice]=useState(0);
   const [amount,setAmount]=useState(0);
   const changes=amount-price;
   console.log(changes);
   //setChange(amount-price);
   console.log(method);
   const notify=()=>toast.info('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

   const handleSubmit =e=>{
      e.preventDefault();
      notify();
      console.log(values);
      props.createPos(values,()=>{})
      Sales_preview.reRender.reRender+=1
   }
   const handleInputChange=e=>{
      const {name,value}=e.target
      setValues({
         ...values,
         [name]: value
      })
   }


   
   return (
      <div className="Sales">

         <section className="pos">
   <h1 className="title">Point Of Sales Terminal</h1>
   <form className="contact-form row" onSubmit={handleSubmit}>
   
   <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select name="itemBrand" id="comp" onChange={handleInputChange} value={values.itemBrand}>
        <option value="Haier">Haier</option>
        <option value="Anex">Anex</option>
        <option value="Dawlance">Dawlance</option>
        <option value="Samsung">Samsung</option>
        <option value="LG">LG</option>
        <option value="Hyundai">Hyundai</option>
        <option value="TCL">TCL</option>
        <option value="Sony">Sony</option>
    </select>
      </div>
      <div className="form-field col-lg-6">
        <label className="label" for="Type" style={{marginBottom:"20px"}}>Type</label>
        <select name="itemType" id="lang" onChange={handleInputChange} value={values.itemType}>
            <option value="AC">AC</option>
            <option value="LED">LED</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Heater">Heater</option>
            <option value="Washing">Washing Machine</option>
      </select>
      </div>
      <div className="form-field col-lg-6">
         <Typeahead name="itemSKU" onChange={handleInputChange} value={values.itemSKU} id="SKU" className="input-text js-input" type="text" required
  
  options={ [{id: 1, label: '82374897'},
  {id: 2, label: '57238947938'},
  {id: 3, label: '234252334'},
  {id: 4, label: '23423523423'}]}
/>
         <label className="label" for="">Product SKU</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input name="itemQuantity" onChange={handleInputChange} value={values.itemQuantity} id="Quantity" className="input-text js-input" type="Number" required/>
         <label className="label" for="Number">Quantity</label>
      </div>

     
      
      
      <div className="form-field col-lg-6 ">
         <input name="itemPrice" onChange={handleInputChange} value={values.itemPrice} id="Price" className="input-text js-input" type="Amount"  />
         <label className="label" for="Amount">Price</label>
      </div>
         
      
      <div className="form-field col-lg-12">
         <input onClick={notify} className="submit-btn" type="submit" value="Add Product"/>
         <ToastContainer />
      </div>
      
   </form>
</section>
      </div>
    );
   }
   
   actions.TableString.StringOfTable="BillChild_POS";
   
   const mapStateToProps = state=>({
      poslist: state.pos.list  
   })
   
   const mapActionToProps =  {
      createPos: actions.create,
      
      
   }
   
   export default connect(mapStateToProps,mapActionToProps)(Sales);
   
   
   