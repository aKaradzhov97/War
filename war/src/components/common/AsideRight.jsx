import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AsideRight extends Component {
    render = () => {
        return (
            <aside className="right-nav">
                <section className="user-panel-right">
                    <Link to="#">{sessionStorage.getItem("username")}</Link>
                    <Link to="/logout">Logout</Link>
                </section>
                <nav className="nav-electricity">
                    <ul>
                        <li>
                                <span className="resource-icon" title="Electricity">
                                    <i className="fas fa-bolt"></i>
                                </span>
                            <span>450 / 500</span>
                            <input type="range" min="0" max="500" value="450" disabled/>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-production">
                    <ul>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-shopping-cart" title="Ore"></i>
                        </span>
                            <span>30 / 100 + 50/h</span>
                            <input type="range" min="0" max="100" value="30" disabled/>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-tint" title="Petrol"></i>
                        </span>
                            <span>50 / 100 + 10/h</span>
                            <input type="range" min="0" max="100" value="50" disabled/>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-microchip" title="Eletronics"></i>
                        </span>
                            <span>0 / 100 + 0/h</span>
                            <input type="range" min="0" max="100" value="0" disabled/>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-coins" title="Money"></i>
                        </span>
                            <span>100 / 100 + 0/h</span>
                            <input type="range" min="0" max="100" value="100" disabled/>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-stats">
                    <ul>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-shield-alt" title="Defense"></i>
                        </span>
                            <span>10000 / 10000</span>
                            <input type="range" min="0" max="10000" value="10000" disabled/>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fab fa-buromobelexperte" title="Area"></i>
                        </span>
                            <span>550 / 3000</span>
                            <input type="range" min="0" max="3000" value="550" disabled/>
                        </li>
                        <li>
                        <span className="resource-icon">
                            <i className="fas fa-users" title="Population"></i>
                        </span>
                            <span>150K / 200K + 1100/h</span>
                            <input type="range" min="0" max="200000" value="150000" disabled/>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}