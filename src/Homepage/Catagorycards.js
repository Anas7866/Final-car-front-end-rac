import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Catagorycards() {

    return (
        <div className="col-sm-12 mt-4 mb-4 p-0  text-center">


            <Carousel responsive={responsive}>
                <div className="col-sm-12 p-0 pb-2">
                    <div className="card mobile-responsive" >

                        <img className="img-fluid p-0" src="images/carolla.png" alt="Card image cap" style={{ position: "relative", zIndex: "50" }} />


                        <div className="card-body" id="blur-bg">

                        <Link to="/Product-details">     <button className="btn btn-primary" style={{ backgroundColor: "rgba(255, 255, 255, 0.315)", border: "2px solid #2B6777", color: '#2B6777', borderRadius: "10px" }}>Book</button></Link>

                            <p className="card-text pt-3">
                            Grandie XLR
                            </p>
                            <h4 className="card-title">Toyota - GLI</h4>

                        </div>

                    </div>

                </div>

                <div className="col-sm-12 p-0 pb-2">
                    <div className="card mobile-responsive" >

                        <img className="img-fluid p-0" src="images/carolla.png" alt="Card image cap" style={{ position: "relative", zIndex: "50" }} />


                        <div className="card-body" id="blur-bg">

                            <button className="btn btn-primary" style={{ backgroundColor: "rgba(255, 255, 255, 0.315)", border: "2px solid #2B6777", color: '#2B6777', borderRadius: "10px" }}>Go somewhere</button>

                            <p className="card-text pt-3">
                                Grandie
                            </p>
                            <h4 className="card-title">Toyota - GLI</h4>

                        </div>

                    </div>

                </div>

                <div className="col-sm-12 p-0 pb-2">
                    <div className="card mobile-responsive" >

                        <img className="img-fluid p-0" src="images/carolla.png" alt="Card image cap" style={{ position: "relative", zIndex: "50" }} />


                        <div className="card-body" id="blur-bg">

                            <button className="btn btn-primary" style={{ backgroundColor: "rgba(255, 255, 255, 0.315)", border: "2px solid #2B6777", color: '#2B6777', borderRadius: "10px" }}>Go somewhere</button>

                            <p className="card-text pt-3">
                                Grandie XL
                            </p>
                            <h4 className="card-title">Toyota - GLI</h4>

                        </div>

                    </div>

                </div>


                {/* {props.cardseco.map((ecoi) => (
                        <div className="col-sm-12 p-0 pb-2">
                            <div className="card mobile-responsive" >

                                <img className="img-fluid p-0" src="images/carolla.png" alt="Card image cap" style={{ position: "relative", zIndex: "50" }} />


                                <div className="card-body" id="blur-bg">

                                    <button className="btn btn-primary" style={{ backgroundColor: "rgba(255, 255, 255, 0.315)", border: "2px solid #2B6777", color: '#2B6777', borderRadius: "10px" }}>Go somewhere</button>

                                    <p className="card-text pt-3">
                                        {ecoi.title}
                                    </p>
                                    <h4 className="card-title">Toyota - GLI</h4>

                                </div>

                            </div>

                        </div>


                    ))
                } */}



            </Carousel>
        </div>
    )
}

export default Catagorycards
