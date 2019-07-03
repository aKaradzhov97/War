import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles import
import './styles/sidebars.css';

export default class AsideRight extends Component {
    isLogged = () => {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('authtoken')) {
            return true;
        }
        return false;
    };

    render = () => {
        return (
            <aside className="right-nav">
                <section className="user-panel-right">
                    <Link to="#">{this.isLogged() ? sessionStorage.getItem("username") : null}</Link>
                    <Link to="/logout">Logout</Link>
                </section>
                <nav className="nav-electricity">
                    <ul>
                        <li>
                            <span className="resource-icon" title="Electricity">
                                    <i className="fas fa-bolt" />
                                </span>
                            <span className="resource-value">450 / 500</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "15%"}} />
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-production">
                    <ul>
                        <li>
                        <span className="resource-icon">
                            <i className="icon-my-icons" title="Ore" />
                        </span>
                            <span className="resource-value">30 / 100 + 50/h</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}}  />
                                <span className="meter-overlay" style={{width: "75%"}}  />
                            </div>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-tint" title="Petrol" />
                        </span>
                            <span className="resource-value">50 / 100 + 10/h</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "50%"}} />
                            </div>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-microchip" title="Eletronics" />
                        </span>
                            <span className="resource-value">0 / 100 + 0/h</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "100%"}} />
                            </div>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-coins" title="Money" />
                        </span>
                            <span className="resource-value">100 / 100 + 0/h</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "0%"}} />
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-stats">
                    <ul>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-shield-alt" title="Defense" />
                        </span>
                            <span className="resource-value">10000 / 10000</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "0%"}} />
                            </div>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fab fa-buromobelexperte" title="Area" />
                        </span>
                            <span className="resource-value">550 / 3000</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "85%"}} />
                            </div>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-users" title="Population" />
                        </span>
                            <span className="resource-value">150K / 200K + 1100/h</span>
                            <div className="meter">
                                <span className="meter-grad" style={{width: "100%"}} />
                                <span className="meter-overlay" style={{width: "25%"}} />
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}