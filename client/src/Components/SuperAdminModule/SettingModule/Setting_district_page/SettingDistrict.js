import React from "react";
import './SettingDistrict.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SuperAdminManubar } from '../../SuperAdminMenuBar/SuperAdmin_Manubar';
export function Settingdistrict(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="district_content_card">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="mb-4">Enter District Name: </label>
                                    <input type={'text'} placeholder='Enter District Name' className='pl-3 mb-4 w-100'/>
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