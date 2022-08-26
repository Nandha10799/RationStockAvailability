import React from "react";
import './Item_Creation.css';
import { SuperAdminManubar } from '../../SuperAdminMenuBar/SuperAdmin_Manubar';
import 'bootstrap/dist/css/bootstrap.min.css';
export function ItemCreation(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="ItemCreation_OuterDiv">
                        <div className="ItemCreation_InnerDiv">
                            <div className="row mb-3">
                                <div className="col-lg-2 mt-2">
                                    <label >Name: </label>
                                </div>
                                <div className="col-lg-10">
                                    <input type='text' name='Item_Name' placeholder='Enter Item Name' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-2 mt-2">
                                    <label >Description: </label>
                                </div>
                                <div className="col-lg-10">
                                    <input type='text' name='Item_Description' placeholder='Enter Description' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label >Select UOM: </label>
                                </div>
                                <div className="col-lg-9">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">-- Choose UOM --</option>
                                        <option value='1'>1</option>
                                        <option value='1'>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-2 mt-2">
                                    <label >Rate: </label>
                                </div>
                                <div className="col-lg-10">
                                    <input type='text' name='Item_Rate' placeholder='Enter Item Rate' className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mt-4">
                                    <button className="w-100 p-2">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}