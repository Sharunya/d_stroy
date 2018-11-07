import React, {Component, Fragment} from "react";
import CHeader from "./components/CHeader";
import CMain from "./components/CMain";
import CFooter from "./components/CFooter";
import CUnderfooter from "./components/CUnderfooter";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <CHeader/>
                <CMain/>
                <CFooter/>
                <CUnderfooter/>
            </Fragment>
        )
    }
}
