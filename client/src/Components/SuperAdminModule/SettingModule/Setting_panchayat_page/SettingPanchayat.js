import React from "react";
import './SettingPanchayat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SuperAdminManubar } from '../../SuperAdminMenuBar/SuperAdmin_Manubar';
export function Setting_panchayat(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panchayat_content_card">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label>Select Your Card Type: </label>
                                    <select className="ml-2 mb-4 w-100">
                                        <option className="text-center" value={''}>---Select card Type---</option>
                                        <option value={'Type-A'}>Type-A</option>
                                        <option value={'Type-B'}>Type-B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-1">
                                    <label>Name: </label>
                                </div>
                                <div className="col-lg-6">
                                    <input type='text' placeholder="Enter Panchayat" className="w-100"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-4">
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