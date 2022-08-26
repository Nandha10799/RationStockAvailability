import React from "react";
import './ItemDetails_StockIssue.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuperAdminManubar } from '../../SuperAdminMenuBar/SuperAdmin_Manubar';
export function ItemDetailStockIssue(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container">
                <div className="row">
                    <div className="ItemDetailStockIssue_OuterDiv">
                        <div className="ItemDetailStockIssue_InnerDiv">
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
                                    <label>Stock Quantity:</label>
                                </div>
                                <div className="col-lg-4">
                                    <input type='text' name='Stock_Qty' placeholder="Enter Stock Quantity" className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-2 mt-2">
                                    <label>Item Details: </label>
                                </div>
                                <div className="col-lg-4">
                                    <input type='text' name="Item Details" placeholder="Enter Item Details" className="w-100 p-2"/>
                                </div>
                                <div className="col-lg-2 mt-2">
                                    <label>Issue Quantity:</label>
                                </div>
                                <div className="col-lg-4">
                                    <input type='text' name='Stock_Qty' placeholder="Enter Stock Quantity" className="w-100 p-2"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label >Select District: </label>
                                </div>
                                <div className="col-lg-9">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">-- Choose District --</option>
                                        <option value='1'>1</option>
                                        <option value='1'>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 mt-2">
                                    <label >Select Panchayat: </label>
                                </div>
                                <div className="col-lg-9">
                                    <select className="w-100 p-2">
                                        <option value='' className="text-center">-- Choose Panchayat --</option>
                                        <option value='1'>1</option>
                                        <option value='1'>2</option>
                                    </select>
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