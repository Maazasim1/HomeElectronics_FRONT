import React from 'react';
import * as actions from '../actions/pos';
import {connect} from 'react-redux';
import {useState} from 'react';
import './forms.css'
import { ToastContainer,toast } from 'react-toastify';


function WareHouse(props){
    const notify=()=>{toast("hello");}
    const intialvalues={
        ItemBrand:'Haier',
        ItemType:'AC',
        Item_ModelNumber:'',
        Quantity:'',
        WareHouseID:'1',
        UnitPrice:''
     }
     const [values,setValues] = useState(intialvalues);

     
     const handleSubmit =e=>{
         actions.TableString.StringOfTable="StockDetails";
        notify();

        console.log("Now Putting into lists")
        
        e.preventDefault();
        console.log(values);
        props.createPos(values,()=>{window.alert('New Product Added to Inventory')})
     }
     const handleInputChange=e=>{
        const {name,value}=e.target
        setValues({
           ...values,
           [name]: value
        })
     }





    return(
        <div>
            <section className="pos">
                <h1 className="title">WareHouse Management</h1>
            <form className="contact-form row" onSubmit={handleSubmit}>
            <h4 className="subtitle">Add New items in stock</h4>
            <div className="form-field col-lg-6">
                
            <label className="label">Location</label> 
                <select name="WareHouseID" onChange={handleInputChange} value={values.WareHouseID}>
                        
                    <option value="1">WareHouse#1</option>
                    <option value="2">WareHouse#2</option>
                    <option value="3">Shop</option>
                </select>
                </div>
                <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select value={values.ItemBrand} onChange={handleInputChange} name="ItemBrand" id="comp">
        <option value="Haier">Hair</option>
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
        <select value={values.ItemType} name="ItemType" id="lang">
            <option value="AC">AC</option>
            <option value="LED">LED</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Heater">Heater</option>
            <option value="Washing">Washing Machine</option>
      </select>
      </div>
      <div className="form-field col-lg-6">
         <input name="Item_ModelNumber" onChange={handleInputChange} value={values.Item_ModelNumber} id="SKU" className="input-text js-input" type="text" required/>
         <label className="label" for="">Product SKU</label>
      </div>
      <div className='form-field col-lg-6'>
            <input name="Quantity" onChange={handleInputChange} value={values.Quantity} id="Quantity" className="input-text js-input" type="number" required/>
            <label className="label" for=''>Quantity</label>
        </div>

        <div className="form-field col-lg-6">
         <input name="UnitPrice" onChange={handleInputChange} value={values.UnitPrice} id="Cost" className="input-text js-input" type="Number"  required/>
         <label className="label" for="Number">Product Cost</label>
      </div>

        <div className="form-field col-lg-12">
         <input  className="submit-btn" type="submit" value="Add Products"/>
      </div>

            </form>
            
            <form className='contact-form row'>
            <h4 className="subtitle">Stock Transfer</h4>
                <div className='form-field col-lg-6'>
            <label className='label'>From</label> 
                <select>
                    <option value="WareHouse#1">WareHouse#1</option>
                    <option>WareHouse#2</option>
                    <option>Shop</option>
                </select>
                </div>

                <div className='form-field col-lg-6'>
                <label className='label'>To</label> 
                <select>
                    <option value="WareHouse#1">WareHouse#1</option>
                    <option>WareHouse#2</option>
                    <option>Shop</option>
                </select>
                </div>
                <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select name="company" id="comp">
        <option value="Haier">Hair</option>
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
        <select name="languages" id="lang">
            <option value="AC">AC</option>
            <option value="LED">LED</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Heater">Heater</option>
            <option value="Washing">Washing Machine</option>
      </select>
      </div>
      <div className="form-field col-lg-6">
         <input id="SKU" className="input-text js-input" type="text" required/>
         <label className="label" for="">Product SKU</label>
      </div>
      <div className='form-field col-lg-6'>
            <input id="Quantity" className="input-text js-input" type="number" required/>
            <label className="label" for=''>Quantity</label>
        </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Update Warehouse"/>
      </div>
            </form>
            </section>
            <ToastContainer />
        </div>
    );
}

actions.TableString.StringOfTable="StockDetails";

  const mapStateToProps = state=>({
     poslist: state.pos.list  
  })
  
  const mapActionToProps =  {
  createPos: actions.create,


  }

export default connect(mapStateToProps,mapActionToProps)(WareHouse);