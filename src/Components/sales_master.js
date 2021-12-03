import React, {useState} from 'react';
import './forms.css'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';






function Sales_master(props) {
    const initial={
 
        BillCreatedOn:'',
        CustomerName:'',
        CustomerPhoneNumber:'',
        CustomerAddress:'',
        DeliveryCharges:'',
        InstallationChares:''
    }

    const [values,setValues] = useState(initial);
    const [method,setMethod]=useState(["Bank Transfer"]);
    const [change,setChange]=useState(0);
    const [price,setPrice]=useState(0);
    const [amount,setAmount]=useState(0);
    const changes=amount-price;
    
    const handleAdvance=e=>{
      if(window.confirm("Give Product on Advance?"))
      {
         window.alert("OK")
      }
      else{
         window.alert("cancel")
      }
      
   }
    
    console.log(changes);
    //setChange(amount-price);
    console.log(method);
 
    const handleSubmit =e=>{
      actions.TableString.StringOfTable="BillMaster_POS";

       console.log("Now Putting into lists")
 
       e.preventDefault();
       console.log(values);
       props.createPos(values,()=>{window.alert('New Sale Completed')})
    }
    const handleInputChange=e=>{
       const {name,value}=e.target
       setValues({
          ...values,
          [name]: value
       })
    }
 
     return (
       <div className="Sales_master">
          <section className="pos">
    <h1 className="title">CheckOut</h1>
    <form className="contact-form row" onSubmit={handleSubmit}>
    <div className="form-field col-lg-6">
          <input name="BillCreatedBy"   id="posName" className="input-text js-input" type="text" required value={values.name}/>
          <label className="label" for="">POS Employee Name</label>
       </div>

       <div className="form-field col-lg-6 ">
          <input name="CustomerName" value={values.name}  id="Customer" className="input-text js-input" type="text" required/>
          <label className="label" for="company">Customer Name</label>
       </div>

        <div className="form-field col-lg-6 ">
          <input name="CustomerPhoneNumber" value={values.name}  id="phone" className="input-text js-input" type="text" required/>
          <label className="label" for="phone">Contact Number</label>
       </div>

       <div className="form-field col-lg-6 ">
            <input name="DeliveryCharges" value={values.name}  id="Delivery" className="input-text js-input" type="Quantity" />
            <label className="label" for="Delivery">Delivery Charges</label>
       </div>

       <div className="form-field col-lg-6 ">
       <input name="InstallationChares" value={values.name}  id="Installation" className="input-text js-input" type="Quantity" />
          <label className="label" for="Installation">Installation Charges</label>
       </div>
       <div className="form-field col-lg-6 ">
       <input name="BillCreatedOn" value={values.BillCreatedOn} onSubmit={handleInputChange}  id="billDate" className="input-text js-input" type="Date" />
          <label className="label" for="Installation">BILL DATE</label>
       </div>
       <div className="form-field col-lg-6 ">
          <label className="label" for="payment">Payment Method</label>
          <select name="Payment" id="pay" value={method} onChange={e=>setMethod(e.target.value)}  >
         <option value="Bank Transfer">Bank Transfer</option>
         <option value="Cheque">Cheque</option>
         <option value="Cash">Cash</option>
     </select>
     </div>
     
     <div>
         {
           method == 'Bank Transfer' ? (
       <div>
          <form className="contact-form row">
          <div className="form-field col-lg-6">
             <input name="bName"   id="Bank" className="input-text js-input" type="text" required/>
             <label className="label" for="Bank">Bank Name</label>
          </div>
          <div className="form-field col-lg-6">
             <input name="aNumber"  id="Bank" className="input-text js-input" type="Number" required/>
             <label className="label" for="Bank">Bank Account Number</label>
          </div>
          </form>
       
       </div>
       
           ) : method == 'Cheque' ? (
             <div>   
                <div>
             <form className="contact-form row">
             <div className="form-field col-lg-6">
                <input name="bName"   id="Cheque" className="input-text js-input" type="text" required/>
                <label className="label" for="Bank">Bank Name</label>
             </div>
             <div className="form-field col-lg-6">
                <input name="chNumber"   id="Cheque" className="input-text js-input" type="Number" required/>
                <label className="label" for="Bank">Cheque Number</label>
             </div>
             </form>
          
          </div></div>
           ) : method == 'Cash' ? (
             
                <div>
             
             <div className="form-field col-lg-6">
                <input name="Amount"   id="Cash" className="input-text js-input" type="text" onChange={e=>setAmount(e.target.value)} required/>
                <label className="label" for="Bank">Amount</label>
             </div>
          <div className="form-field col-lg-6 ">
          <label className="label" for="Change">Change: {changes} PKR</label>
       </div>
             
             
          
          </div>
           
           ) : null
         }
       </div>
       
       <div className="form-field col-lg-12">
          <input name="CustomerAddress" value={values.name} name="Address"   id="Address" className="input-text js-input" type="text" required/>
          <label className="label" for="Address">Address</label>
       </div>
       <div className="form-field col-lg-12">
         <input  className="submit-btn" type="button" onClick={handleAdvance} value="Credit"/>
      </div>
       <div className="form-field col-lg-12">
          <input  className="submit-btn" type="submit" value="Make Sale"/>
       </div>
    </form>
 </section>
       </div>
     );
   }
 
 
   const mapStateToProps = state=>({
      poslist: state.pos.list  
   })
   
   const mapActionToProps =  {
   createPos: actions.create,
 
 
   }
   
   export default connect(mapStateToProps,mapActionToProps)(Sales_master);
   
 
 