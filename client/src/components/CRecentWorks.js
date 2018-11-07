import React, {Component} from 'react';
import CSectionTitle from "./CSectionTitle";
import CRecentWorkItem from "./CRecentWorkItem";

class CRecentWorks extends Component {
    render() {
        return (
            <div className="row section recentworks topspace">
                <CSectionTitle title="RECENT WORKS"/>
                <div className="thumbnails recentworks row">
                    <CRecentWorkItem/>
                    <CRecentWorkItem/>
                    <CRecentWorkItem/>
                    <CRecentWorkItem/>
                    <CRecentWorkItem/>
                    <CRecentWorkItem/>
                </div>
            </div>
        );
    }
}

export default CRecentWorks;
