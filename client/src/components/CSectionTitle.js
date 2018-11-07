import React, {Component} from 'react';

class CSectionTitle extends Component {
    render() {
        return (
            <h2 className="section-title">
                <span>{this.props.title}</span>
            </h2>
        );
    }
}

export default CSectionTitle;
