import React from "react";
import './Admin_Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic,faDashcube,faContao} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminManuBar } from '../AdminMenuBarPage/Admin_Manubar';
export function AdminDashboard(){
    return(
        <div>
            <AdminManuBar/>
            <div className="admin_dashboard_section">
                <div className="row">
                    <div className="col-lg-3 admin_databoard_card">
                        <h1>Total Panchayat</h1>
                        <h2>10</h2>
                    </div>
                    <div className="col-lg-3 admin_databoard_card">
                        <h1>Item Details</h1>
                        <h2>10</h2>
                    </div>
                    <div className="col-lg-3 admin_databoard_card">
                        <h1>Stock Quantity</h1>
                        <h2>100</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}