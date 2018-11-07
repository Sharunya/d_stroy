import React, {Component} from 'react';
import CNavbar from "./CNavbar";
import {Parallax} from 'react-parallax';

class CHeader extends Component {
    render() {
        return (
            <header id="header">
                    <span id="head">
                <Parallax className="home" bgImage={require("../images/bg_head.jpg")} strength={-1000}>
                    <h1 id="logo" className="text-center">
                        <img className="img-circle" src={"assets/images/guy.jpg"} alt=""/>
                        <span className="title">Anthony Russel</span>
                        <span className="tagline">
                            A mystery person
                            <br/>
                            {/*eslint-disable-next-line*/}
                            <a href="#">anthony.russel42@example.com</a>
                        </span>
                    </h1>
                </Parallax>
                    </span>
                <CNavbar/>
            </header>
        );
    }
}

export default CHeader;
