import React from 'react';
import '../styles/Home.css';
import Logo from '../logos/Logo';

function Home() {
    return (
        <div className="appMountPoint">
            <div>
                <div className="container">
                    <div className = "container-wrapper">
                        <div className="header">
                            <span className="svg-nfLogo story-logo nfLogo">
                                <Logo />
                            </span>

                            <div 
                                className ="language-container-selection"
                                id = "language-switcher">

                                <div className="ui-select-wrapper">
                                    <label className="ui-label">
                                        <span className="ui-label-text">
                                            Selecciona el Idioma
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
