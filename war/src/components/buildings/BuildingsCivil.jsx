import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

//Services
import buildingsService from "../../services/buildingsService";

//Configuration
import BuildingsCivilConfig from "../../config/BuildingsCivilConfig";

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
    constructor(props) {
        super(props);

        this.state = {
            oreMines: {},
            oilFields: {},
            houses: {},
            airPowerPlant: {},
            hydroPowerPlant:{},
            infrastructure:{},
            oreWarehouse: {},
            oilWarehouse: {},
        }
    }

    componentDidMount = () => {
        this.getBuildings();

        $("#btn-ore-mines").on("click", () => {
            this.levelUpBuilding(this.state.oreMines.level, this.state.oreMines.buildTime);
        });
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

    getBuildings = () => {
        buildingsService.getUserBuildings(sessionStorage.getItem("userId"))
            .then((res) => {
                this.setState({
                    oreMines: BuildingsCivilConfig.OreMinesConfig(res.buildingsCivil.oreMines.level, res.buildingsCivil.oreMines.ore)
                });
                $("#timer-ore-mines").empty();
                $("#timer-ore-mines").append(this.parseTimeFromSeconds(this.state.oreMines.buildTime));
            }).catch((err) => {

        });
    };

    levelUpBuilding = (currentLvl, seconds) => {
        let now = Date.now();
        let countDownDate = (now + (seconds * 1000)) + "";

        let update = setInterval(function () {
            now = Date.now();

            let diff = Number(countDownDate) - Number(now) + 1000;

            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            let timer = $("#timer-ore-mines");
            let btn = $("#btn-ore-mines");

            timer.empty();
            timer.append(hours + ":" + minutes + ":" + seconds);

            if (diff < 1000) {

                this.setState({
                    oreMines: BuildingsCivilConfig.OreMinesConfig(this.state.oreMines.level + 1, this.state.oreMines.ore),
                });

                clearInterval(update);
            }
        }, 1000);
    };

    parseTimeFromSeconds = (inputSeconds) => {
        inputSeconds = Number(inputSeconds * 1000);
        let hours = Math.floor((inputSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((inputSeconds % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((inputSeconds % (1000 * 60)) / 1000);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let result = hours + ":" + minutes + ":" + seconds;

        return result;
    };

    render = () => {
        const loggedInSection = (
            <section className="main-section">
                <AsideLeft/>
                <section className="buildings">
                    <section className="buildings-type-list">
                        <Link to="/buildings/civil">Civil</Link>
                        <Link to="/buildings/military">Military</Link>
                        <Link to="#">Hi - Tech</Link>
                    </section>
                    <article className="building">
                        <div className="building-image">
                            <img src={oreMineImg} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Ore mines [ {this.state.oreMines.level} ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span id="timer-ore-mines">00:00:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>{this.state.oreMines.ore}</span>
                                </div>
                                <div className="building-area-required">
                                    <span>{this.state.oreMines.area}</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>{this.state.oreMines.electronics}</span>
                                    <i className="fas fa-microchip" title="Electronics required"></i>
                                </div>
                                <button className="building-build-btn" id="btn-ore-mines">Build</button>
                            </div>
                        </div>
                    </article>
                    <article className="building">
                        <div className="building-image">
                            <img src={oilImg} alt=""/>
                        </div>
                        <div className="building-info">
                            <div className="building-upper-info">
                                <span className="building-title">Oil fields [ {this.state.oilFields.level} ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:03:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>{this.state.oilFields.oreRequired}</span>
                                </div>
                                <div className="building-area-required">
                                    <span>{this.state.oilFields.areaRequired}</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>{this.state.oilFields.electronicsRequired}</span>
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
                                <span className="building-title">Houses [ {this.state.houses.level} ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:07:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>{this.state.houses.oreRequired}</span>
                                </div>
                                <div className="building-area-required">
                                    <span>{this.state.houses.areaRequired}</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>{this.state.houses.electronicsRequired}</span>
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
                                <span className="building-title">Air Power Plant [ {this.state.airPowerPlant.level} ]</span>
                                <div className="building-build-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>07:30:00</span>
                                </div>
                            </div>
                            <div className="building-bottom-info">
                                <div className="building-ore-required">
                                    <i className="icon-my-icons" title="Ore required"></i>
                                    <span>{this.state.airPowerPlant.oreRequired}</span>
                                </div>
                                <div className="building-area-required">
                                    <span>{this.state.airPowerPlant.areaRequired}</span>
                                    <i className="fab fa-buromobelexperte" title="Area required"></i>
                                </div>
                                <div className="building-electronics-required">
                                    <span>{this.state.airPowerPlant.electronicsRequired}</span>
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

        //TODO - make an error page so you wont return null!

        return (
            <main>
                {
                    (!this.isLogged())
                        ? this.redirectTo()
                        : loggedInSection
                }
            </main>
        )
    }
}