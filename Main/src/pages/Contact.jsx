import React, {  useState, useEffect } from "react";
 
function Contact() {
 
    const [formvalue, setFormvalue]= useState({ name:'',email:'',message:''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit]= useState(false);
 
    const handlevalidation =(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue, [name]: value});
        
    }
    const handlesubmit= (e)=>{
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    }
    const validationform = (value)=>{
        const errors= {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
        if(!value.name){
            errors.name="Please Enter Name";
        }
 
        if(!value.email){
            errors.email="Please Enter Email";
        } else if(!emailPattern.test(value.email))
        {
            errors.email="Enter Valid Email";
        }
        if(!value.message){
            errors.message="Please Enter Message";
        }
 
        return errors;
    }
 
    useEffect( ()=>{
        if(Object.keys(formerror).length===0 && issubmit)
        {
            console.log(formvalue);
        }
    },[formerror, formvalue, issubmit]);
     
 return (
    <div className="bg-white container m-5" onClick={handlesubmit}>


        <form className="bg-white" onSubmit={ handlesubmit } >

            <div className="mb-4">
                <label className=" col-form-label">Name</label>
                <div className="col-sm-5">
                  <input type="text" className="form-input" name="name" value={ formvalue.name}  onChange={ handlevalidation} />
                  <span className="text-danger">{ formerror.name } </span>
                </div>
            </div>

            <div className="mb-4">
                <label className="col-form-label">Email</label>
                <div className="col-sm-5">
                <input type="text" className="form-input" name="email" value={ formvalue.email} onChange={ handlevalidation}   />
                <span className="text-danger">{ formerror.email}  </span>
                </div>
            </div>

            <div className="mb-4">
                <label className="col-form-label">Message</label>
                <div className="col-sm-5">
                <textarea  className="form-input" name="message" value={ formvalue.message} onChange={ handlevalidation}   />
                <span className="text-danger">{ formerror.message}  </span>
                </div>
            </div>

            <div className="row mb-4">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                <button className="btn btn-success" name="button">Submit</button>
            </div>
            </div>
            </form>
    </div>
  );
}
 
export default Contact;