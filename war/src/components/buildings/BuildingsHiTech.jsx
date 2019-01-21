import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components import
import AsideLeft from "../common/AsideLeft";
import AsideRight from "../common/AsideRight";

//Images import
import laboratory from "../../images/buildings-hitech/Chemistry-1920x960.jpg";
import electronicsPlant from "../../images/buildings-hitech/ElectronicsPlant.jpg";
import electronicsStorage from "../../images/buildings-hitech/ElectronicsPlantStorage.jpg";
import nuclearPlant from "../../images/buildings-hitech/NuclearPowerPlant.jpg";
import rocketSilo from "../../images/buildings-hitech/Rocket-soli.jpg";

export default class BuildingsHiTech extends Component {
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
                            <img src={laboratory} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Laboratory [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:10:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>1500</span>
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
                            <img src={electronicsPlant} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Electronics Plant [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:05:30</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>1000</span>
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
                            <img src={electronicsStorage} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Electronics Storage [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:07:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>5000</span>
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
                            <img src={nuclearPlant} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Nuclear Power Plant [ 1 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>01:30:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>10000</span>
                                </div>
                                <div className="building-area-required">
                                    <span>35</span>
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
                            <img src={rocketSilo} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Rocket Silo [ 0 ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:25:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>10000</span>
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