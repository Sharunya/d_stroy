import React, {Component} from 'react';

class CServiceColumn extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3">
                <h3 className="text-center">{this.props.title}</h3>
                <p>
                    {this.props.text}
                </p>
                <p className="text-center">
                    <a href className="btn btn-action">
                        Read more
                    </a>
                </p>
            </div>
        );
    }
}

export default CServiceColumn;
