import React, {useState} from "react";
import './Common_Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";
export function CommonLogin(){
    const [passwordShow, setPasswordShow]=useState(false);
    const show=()=>{
        setPasswordShow(!passwordShow);
    }
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="outerDiv">
                        <div className="innerDiv">
                            <div className="login_icon">
                                <FontAwesomeIcon icon={faUserCircle} className="SuperAdmin_login_icon w-100"/>
                            </div>
                            <div className="login_header_section">
                                <div className="login_header_data">
                                    <h4>Login</h4>
                                </div>
                                <div className="col-lg-12">
                                    <input type= 'text' name='User_name' placeholder="UserName" className="login_input_box p-2 w-100"/>
                                </div>
                                <div className="col-lg-12">
                                    <input type={passwordShow ? "text": "password"} name='User_name' placeholder="Password" className="login_input_box p-2 w-100"/>
                                    <label id="admin_show_pass">
                                        <FontAwesomeIcon icon={faEyeSlash} onClick={show}/>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <Link to='/SuperAdminDashBoard'><button className="login_input_button w-100 p-2 mt-3 mb-3">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}