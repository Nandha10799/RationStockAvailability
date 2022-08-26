import React from "react";
import './SettingRole.css';
import { SuperAdminManubar } from '../../SuperAdminMenuBar/SuperAdmin_Manubar';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Settingrole(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="role_content_card">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="mb-4">Enter Role Name: </label>
                                    <input type={'text'} placeholder='Enter Role Name' className='pl-3 mb-4 w-100'/>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}