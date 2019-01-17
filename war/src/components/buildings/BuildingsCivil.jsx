import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components import
import AsideLeft from "../common/AsideLeft";
import AsideRight from "../common/AsideRight";

//Images import
import oreMineImg from "../../images/buildings-civil/ore-mine.png";
import oilImg from "../../images/buildings-civil/oil.jpg"
import house from "../../images/buildings-civil/houses.jpg"
import greenElectric from "../../images/buildings-civil/green-el.jpg"
import hydroPower from "../../images/buildings-civil/water-plant.jpg"
import infrastructure from "../../images/buildings-civil/infra.jpg"
import oreStorage from "../../images/buildings-civil/ore-strorage.jpg"
import oilStorage from "../../images/buildings-civil/Oil-storage.jpg"

export default class BuildingsCivil extends Component {
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
                <AsideLeft/>
                <section className="buildings">
                    <section className="buildings-type-list">
                        <Link to="/buildings/civil">Civil</Link>
                        <Link to="/buildings/military">Military</Link>
                        <Link to="/buildings/hi-tech">Hi - Tech</Link>
                    </section>
                    <article className="building">
                        <div className="building-image">
                            <img src={oreMineImg} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Ore mine [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:01:30</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Oil field [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:03:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Houses [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:07:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Air Power Plant [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>07:30:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Hydro Power Plant [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:16:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Infrastructure [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>02:15:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Ore Warehouse [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:27:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                                <span className="building-title">Oil Warehouse [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span> 00:32:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
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
                <AsideRight/>
            </section>
        );

        return (
            <main>
                {this.isLogged() ? loggedInSection : this.redirectTo()}
            </main>
        )
    }
}