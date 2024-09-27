import React from 'react';
import logo from '../../images/logo.jpg';
import logo2 from '../../images/logo2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './cards.css';

function Cards() {
    return (
        <div className='container'>
            <h2 className='header'>Heading</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"> {/* Adjusted column classes */}

                <div className="col">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 1</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={logo2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 2</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 3</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={logo2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 4</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 5</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={logo2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sub-heading 6</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <a href="/" className="button">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
