import React, {Component} from 'react';
import CSectionTitle from "./CSectionTitle";
import CServiceColumn from "./CServiceColumn";

class CServicesColumns extends Component {
    state = {serviceList: []};

    componentDidMount() {
        fetch('/services')
            .then(res => res.json())
            .then(serviceList => this.setState({serviceList}));
    }

    render() {
        return (
            <div className="row section featured topspace">
                <CSectionTitle title="SERVICES"/>
                <div className="row">
                    {this.state.serviceList.map(service =>
                        <CServiceColumn title={service.title} text={service.text}/>
                    )}
                </div>
            </div>
        );
    }
}

export default CServicesColumns;
