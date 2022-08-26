import React from "react";
import './SettingUom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuperAdminManubar } from "../../SuperAdminMenuBar/SuperAdmin_Manubar";
export function SettingUOM(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="settingUom_OuterDiv">
                        <div className="settingUom_InnerDiv">
                            <div className="row">
                                <div className="col-lg-1">
                                    <label className="mt-3">Name: </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' placeholder="Enter UOM" className="w-100 ml-3 settingUom_Inputbox"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <button className="w-100 mt-4">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}