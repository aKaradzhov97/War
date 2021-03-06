import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles import
import './styles/sidebars.css';

export default class AsideLeft extends Component {
    render = () => {
        return (
            <aside className="left-nav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/buildings/civil">Buildings</Link>
                        </li>
                        <li>
                            <Link to="/technologies/civil">Technologies</Link>
                        </li>
                        <li>
                            <Link to="/hire">Hire</Link>
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
        );
    }
}