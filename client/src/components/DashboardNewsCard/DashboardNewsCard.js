import React, { Component } from "react";
import "./style.css"

class DashboardPayslipCard extends Component {
    render() {
        return (
            <div className="dashboardCard card cardBackground">
                <div className="card-body">
                    <h4 className="card-subtitle">Info</h4>
                    <br/>
                    <p className="card-text">
                        Thank you for creating an account with us.
                    </p>
                    <p className="card-text">
                        Please go to shop and you select the products, which you would like to add to cart for purchase.
                    </p>
                    <p className="card-text">Please use this website as you wish</p>
                    <p className="card-text">More products and details will be coming soon</p>
                    <p className="card-text">More options will be coming soon</p>
                    <p className="card-text">No delivery. No pick-up.  COMING SOON</p>
                    <p className="card-text">Sorry for any inconveniences. Thank you very much</p>
                    <p className="card-text">Team at Access Point</p>
                    <a href="/" className="card-link bottomLink"></a>
                </div>
            </div>
        );
    }
}

export default DashboardPayslipCard;