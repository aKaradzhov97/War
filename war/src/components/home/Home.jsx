import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import notificator from "../../utils/notificator";
import requester from "../../utils/requester";

import oreMineImg from "../../images/mine.png";
import oilImg from "../../images/oil.jpg"
import house from "../../images/houses.jpg"
import greenElectric from "../../images/green-el.jpg"
import hydroPower from "../../images/water-plant.jpg"
import infrastructure from "../../images/infra.jpg"
import oreStorage from "../../images/ore-strorage.jpg"
import oilStorage from "../../images/Oil-storage.jpg"


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({
            [fieldName]: fieldValue
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //Validate here.

        if (this.state.username.length < 4) {
            notificator.showError('Username must be at least 4 symbols!');
            return;
        } else if (this.state.password.length < 5) {
            notificator.showError('Password must be at least 5 symbols!');
            return;
        }

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                sessionStorage.setItem('username', res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
                sessionStorage.setItem('userId', res._id);
                if (res._kmd.roles !== undefined) {
                    sessionStorage.setItem('roleId', res._kmd.roles[0].roleId);
                }
                notificator.showInfo('Successfully logged in!');

                this.props.history.push('/');

            }).catch((res) => {
            if (res.responseJSON.description === 'Invalid credentials. Please retry your request with correct credentials.') {
                notificator.showError('Invalid username and / or password! Please try again!');
            }

            this.setState({ username: '', password: '' });
        });
        //Notifications & validation remaining
        //Clear input fields.
        this.setState({
            username: '',
            password: ''
        })
    };

    isLogged = () => {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('authtoken')) {
            return true;
        }
        return false;
    };

    redirectTo = () => {
        this.props.history.push("/");
    };

    render = () => {
        const loggedInSection = (
            <section className="main-section">
                <aside className="left-nav">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/buildings/civil">Buildings</Link>
                            </li>
                            <li>
                                <Link to="#">Technologies</Link>
                            </li>
                            <li>
                                <Link to="#">Hire</Link>
                            </li>
                            <li>
                                <Link to="#">Units</Link>
                            </li>
                            <li>
                                <Link to="#">Command center</Link>
                            </li>
                            <li>
                                <Link to="#">Trade</Link>
                            </li>
                            <li>
                                <Link to="#">Map</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className="buildings">
                    <section className="buildings-type-list">
                        <Link to="/buildings/civil">Civil</Link>
                        <Link to="#">Military</Link>
                        <Link to="#">Hi - Tech</Link>
                    </section>
                    <article className="building">
                        <div className="building-image">
                            <img src={oreMineImg} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Ore mine [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:01:30</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>100</span>
                                </div>
                                <div className="building-area-required">
                                    <span>15</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={oilImg} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Oil field [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:03:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>200</span>
                                </div>
                                <div className="building-area-required">
                                    <span>15</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={house} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Houses [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:07:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>450</span>
                                </div>
                                <div className="building-area-required">
                                    <span>10</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={greenElectric} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Air Power Plant [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>07:30:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>25000</span>
                                </div>
                                <div className="building-area-required">
                                    <span>65</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={hydroPower} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Hydro Power Plant [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:16:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>56000</span>
                                </div>
                                <div className="building-area-required">
                                    <span>75</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={infrastructure} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Infrastructure [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>02:15:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>2800</span>
                                </div>
                                <div className="building-area-required">
                                    <span>25</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={oreStorage} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Ore Warehouse [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:27:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>2300</span>
                                </div>
                                <div className="building-area-required">
                                    <span>5</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={oilStorage} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Oil Warehouse [1]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:32:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="fas fa-shopping-cart" title="Ore required"></i>
                                    <span>3300</span>
                                </div>
                                <div className="building-area-required">
                                    <span>8</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>0</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn">Build</button>
                            </div>
                        </div>
                    </article>
                </section>
                <aside className="right-nav">
                    <section className="user-panel-right">
                        <Link to="#">{sessionStorage.getItem("username")}</Link>
                        <Link to="/logout">Logout</Link>
                    </section>
                    <nav className="nav-electricity">
                        <ul>
                            <li>
                                <span className="resource-icon" title="Electricity">
                                    <i class="fas fa-bolt"></i>
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
            </section>
        );

        return (
            <main>
                {this.isLogged() ? loggedInSection : this.redirectTo()}
            </main>
        )
    }
}