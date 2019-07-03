import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components import
import AsideLeft from "../../../components/Sidebars/AsideLeft";
import AsideRight from "../../../components/Sidebars/AsideRight";

//Images import
import aviation from "./images/aviation.jpg";

export default class TechnologiesMilitary extends Component {
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
                        <Link to="/technologies/military">Military</Link>
                        <Link to="/technologies/hi-tech">Hi - Tech</Link>
                    </section>
                    <article className="technologies">
                        <div className="technologies-image">
                            <img src={aviation} alt=""/>
                        </div>
                        <div className="technologies-info">
                            <div className="technologies-upper-info">
                                <span className="technologies-title">Aviation [ 0 ]</span>
                                <div className="technologies-train-time">
                                    <i className="far fa-clock" title="Time required" />
                                    <span>01:00:00</span>
                                </div>
                            </div>
                            <div className="technologies-bottom-info">
                                <div className="technologies-ore-required">
                                    <i className="fas fa-flask" title="Science power required" />
                                    <span>10000</span>
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