import React from 'react'
import Tilt from 'react-tilt'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "../Login/Login.css"


function Login() {
    return (
        <div className="col-sm-12 background-gradiant p-5" style={{ overflowX: "hidden" }}>
            <div className="col-sm-12 background-learner ">
                <div className="row background-chnge ">
                    <div className="col-sm-6  m-auto">
                    <Tilt className="Tilt" options={{ max : 45 }}  >
                        <div className="col-sm-12 text-center " >
                            <img src="images/surface1.png" className="img-fluid image-size" />
                        </div>
                        </Tilt>
                    </div>
                    <div className="col-sm-6 login-section ">
                        <div className="col-sm-12 text-center">
                            <h2><b>Welcome Back</b></h2>
                        </div>
                        {/* <div className="col-sm-12">
                        <input type="text" className="form-control field-background"  />
                    </div> */}
                        <div className="row pt-3">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8 text-center"  >

                                <div className="input-group field-size text-center">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-pirmary button-color" type="button"><i style={{ color: "gray" }} class="far fa-envelope"></i></button>
                                    </div>
                                    <input type="text" className="form-control field-background shadow-none focus-1" id="effect-11" placeholder="Email" aria-label aria-describedby="basic-addon1" />
                                    
                                </div>

                                <div className="col-sm-2"></div>

                                


                            </div>
                            
                        </div>
                        <div className="row pt-4">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8 text-center"  >

                                <div className="input-group field-size text-center">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-lock"></i></button>
                                    </div>
                                    <input type="password" className="form-control field-background shadow-none focus-1" placeholder="Password" aria-label aria-describedby="basic-addon1" />
                                </div>
                                <div className="col-sm-2"></div>


                            </div>
                        </div>

                      
                        <div className="col-sm-12 text-center pt-4">
                          <Link to="/Dashboard">  <button className="btn btn-primary button-padding " > Login </button></Link>
                        </div>
                        
                        <div className="col-sm-12 text-center " style={{cursor:"pointer"}}>
                        <Link to="/forget-password" style={{textDecoration:"none",color:"gray"}} >    <p  className="pt-2 m-0 text-hover" >Forgot Username / Password?</p></Link>
                         <Link to="/signup" style={{textDecoration:"none",color:"gray"}}>   <p className="p-0 m-0 text-hover" >Create Account</p> </Link>
                          
                        </div>

                        

                       
                        

                        

                        


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
