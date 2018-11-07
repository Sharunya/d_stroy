import React, {Component} from 'react';
import CSlogan from "./CSlogan";
import CServicesColumns from "./CServicesColumns";
import CRecentWorks from "./CRecentWorks";
import CWarningPanelWithButton from "./CWarningPanelWithButton";
import CSectionTitle from "./CSectionTitle";

class CMain extends Component {
    render() {
        return (
            <main id="main">
                <div className="container">
                    <CSlogan/> {}
                    <CServicesColumns/> {}
                    <CRecentWorks/> {}
                    <CWarningPanelWithButton/> {}
                    <div className="row section clients topspace">
                        <CSectionTitle title="CLIENTS"/>
                        <div className="col-lg-12">
                            <p>
                                <img src="assets/images/sample_clients.png" alt=""/>
                            </p>
                        </div>
                    </div>
                    {/*/section*/}
                </div>
                {/*/container*/}
            </main>
        );
    }
}

export default CMain;
