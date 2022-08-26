import React from "react";
import './SuperAdmin_DashBoard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SuperAdminManubar } from '../SuperAdminMenuBar/SuperAdmin_Manubar';
export function SuperAdminDashboard(){
    return(
        <div>
            <SuperAdminManubar/>
            <div className="dashboard_section">
                <div className="row">
                    <div className="col-lg-3 databoard_card">
                        <h1>Tatal Users</h1>
                        <p>(Staff)</p>
                        <h2>10</h2>
                    </div>
                    <div className="col-lg-3 databoard_card">
                        <h1>Tatal District</h1>
                        <h2>1</h2>
                    </div>
                    <div className="col-lg-3 databoard_card">
                        <h1>Tatal Panchayat</h1>
                        <h2>10</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 databoard_card">
                        <h1>Item Details</h1>
                        <h2>10</h2>
                    </div>
                    <div className="col-lg-3 databoard_card">
                        <h1>Stock Quantity</h1>
                        <h2>10</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}