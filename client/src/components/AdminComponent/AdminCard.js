import React, { Component } from "react";
import "./style.css"

class AdminCard extends Component {
    render() {
        return (
            <div className="dashboardCard card cardBackground">
                <div className="card-body">
                    <h4 className="card-subtitle">Welcome Admin</h4>
                    <p className="card-text">
                        Here you will be able to update the details for the online shop.
                        Please click the button below to access.
                    </p>
                    <a href="/admin" className="card-link bottomLink">Edit Shop as Admin</a>
                </div>
            </div>
        );
    }
}

export default AdminCard;