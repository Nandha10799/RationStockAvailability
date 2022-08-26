import React from "react";
import './Admin_Manubar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function AdminManuBar(){
    return(
        <div>
            <div className="admin_header_section">
                <div className="admin_header_data">
                    <div className="admin_header_logo">
                        <i><FontAwesomeIcon icon={faGalacticRepublic}/></i>
                    </div>
                    <div className="admin_header_right">
                        <div className="row">
                            <i><FontAwesomeIcon icon={faUserCircle}/></i>
                            <p className="m-3">Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin_menu_section">
                <div className="admin_menu_data">
                    <div className="admin_menu_list">
                        <ul>
                            <li>
                                <Link to='/AdminDashBoard'><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Dashboard</span></Link>
                            </li>
                            <li>
                                <Link to=''><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Staff Creation</span></Link>
                            </li>
                            <li>
                                <Link to=''><i><FontAwesomeIcon icon={faDashcube}/></i><span className="ml-2">Direct Stock Issue</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}