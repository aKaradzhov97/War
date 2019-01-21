import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components import
import AsideLeft from "../common/AsideLeft";
import AsideRight from "../common/AsideRight";

//Images import
import education from "../../images/technologies-civil/education-copy-1.jpg";
import medicine from "../../images/technologies-civil/bigstock-Medicine-Pills-52148695.jpg";
import geology from "../../images/technologies-civil/geology.JPG";
import architecture from "../../images/technologies-civil/architecture.jpeg";
import urbanPlaning from "../../images/technologies-civil/urbanPlaning.jpg";

export default class TechnologiesCivil extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

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
                        <Link to="/technologies/civil">Civil</Link>
                        <Link to="#">Military</Link>
                        <Link to="#">Hi - Tech</Link>
                    </section>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={education} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Education [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:25:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Ore required"></i>
                                    <span>200</span>
                                </div>
                                <button className="technologies-build-btn">Train</button>
                            </div>
                        </div>
                    </article>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={medicine} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Medicine [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:25:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Ore required"></i>
                                    <span>200</span>
                                </div>
                                <button className="technologies-build-btn">Train</button>
                            </div>
                        </div>
                    </article>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={geology} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Geology [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>00:40:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Ore required"></i>
                                    <span>250</span>
                                </div>
                                <button className="technologies-build-btn">Train</button>
                            </div>
                        </div>
                    </article>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={architecture} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Architecture [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>01:00:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Ore required"></i>
                                    <span>250</span>
                                </div>
                                <button className="technologies-build-btn">Train</button>
                            </div>
                        </div>
                    </article>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={urbanPlaning} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Urban Planing [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required"></i>
                                    <span>01:25:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Ore required"></i>
                                    <span>450</span>
                                </div>
                                <button className="technologies-build-btn">Train</button>
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