import React from "react";
import './ItemStock_Updation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuperAdminManubar } from "../../SuperAdminMenuBar/SuperAdmin_Manubar";
export function ItemStockUpdation(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container">
                <div className="row">
                    <div className="ItemDetailStockUpdation_OuterDiv">
                        <div className="ItemDetailStockUpdation_InnerDiv">
                            <div className="row mb-3">
                                <div className="col-lg-2 mt-2">
                                    <label>Item ID: </label>
                                </div>
                                <div className="col-lg-4">
                                    <select className="w-100 p-2">
                                        <option className="text-center">-- Choose Item ID --</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 mt-2">
                                    <label>Item Details:</label>
                                </div>
                                <div className="col-lg-4">
                                    <input type='text' name='Item_Details' placeholder="Enter Item Details" className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Old Stock Quantity:</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' name='OldStock_Qty' placeholder="Enter Old Stock Quantity" className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label>Updated Stock Quantity: </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' name="UpdatedStock_Qty" placeholder="Enter Updated Stock Quentity" className="w-100 p-2"/>
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