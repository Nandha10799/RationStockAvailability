import React from "react";
import './SuperAdminStaffCreation.css';
import { SuperAdminManubar } from "../SuperAdminMenuBar/SuperAdmin_Manubar";
export function SuperAdmin_StaffCreation(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="staffCraetion_OuterDiv">
                        <div className="staffCraetion_InnerDiv">
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Name: </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' placeholder='Enter Staff Name' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Phone number:  </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' placeholder='Enter Staff Phone Number' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>E-Mail Id:  </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='email' placeholder='Enter Staff E-Mail ID' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Role:  </label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">--Choose Role--</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>District:  </label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">--Choose District--</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Panchayat:  </label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">--Choose Role--</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 m-auto">
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