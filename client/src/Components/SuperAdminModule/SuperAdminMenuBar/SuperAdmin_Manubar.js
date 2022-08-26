import React from "react";
import './SuperAdmin_Manubar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function SuperAdminManubar(){
    return(
        <div>
            <div className="SuperAdmin_header_section">
                <div className="SuperAdmin_header_data">
                    <div className="SuperAdmin_header_logo">
                        <i><FontAwesomeIcon icon={faGalacticRepublic}/></i>
                    </div>
                    <div className="SuperAdmin_header_right">
                        <div className="row">
                            <i><FontAwesomeIcon icon={faUserCircle}/></i>
                            <p className="m-3">Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SuperAdmin_menu_section">
                <div className="SuperAdmin_menu_data">
                    <div className="SuperAdmin_menu_list">
                        <ul>
                            <li>
                                <a><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Dashboard</span></a>
                            </li>
                            <li>
                                <a><i><FontAwesomeIcon icon={faContao}/></i><span className="ml-2">Settings</span></a>
                                <ul className="SuperAdmin_sub_menu">
                                    <li><Link to='/SettingRole'>Role</Link></li>
                                    <li><Link to='/SettingDistrict'>District</Link></li>
                                    <li><Link to='/SettingPanchayat'>Panchayat</Link></li>
                                    <li><Link to='/SettingUOM'>UOM</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Staff Creation</span></a>
                            </li>
                            <li>
                                <a><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Item Details</span></a>
                                <ul>
                                    <li><Link to='/ItemCreation'>Item Creation</Link></li>
                                    <li><Link to='ItemStockUpdation'>Stock Updation</Link></li>
                                    <li><Link to='/ItemDetailStockIssue'>Stock Issue</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}