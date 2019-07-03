import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components import
import AsideLeft from "../../components/Sidebars/AsideLeft";
import AsideRight from "../../components/Sidebars/AsideRight";

//Styles import
import './styles/hire.css';

//Images import
import oreMineImg from "../Buildings/Civil/images/ore-mine.png";
import oilImg from "../Buildings/Civil/images/oil.jpg";

export default class Hire extends Component {
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
                <section className="hire-section">
                    sadasdas
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