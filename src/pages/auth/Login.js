import React from 'react';
// import InputType from '../../components/Shared/Form/InputType';
import Form from '../../components/Shared/Form/Form';
const Login =()=>{
    return(
        <>
           <div className="row g-0">
            <div className="col-md-8 form-banner">
                <img src="./assests/images/banner1.jpg" alt="loginImage "/>
                

            </div>
            <div className="col-md-4  form-container">
              <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"login"}/>


            </div>
           </div>
        </>
    )
}
export default Login;