import React, {Component} from 'react';

class CUnderfooter extends Component {
    render() {
        return (
            <footer id="underfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 widget">
                            <div className="widget-body">
                                <p>234 Hidden Pond Road, Ashland City, TN 37015 </p>
                            </div>
                        </div>
                        <div className="col-md-6 widget">
                            <div className="widget-body">
                                <p className="text-right">
                                    Copyright © 2014, Your awesome name here
                                    <br/>
                                    Design:{" "}
                                    <a href="http://www.gettemplate.com" rel="designer">
                                        Initio by GetTemplate
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {" "}
                    {}
                </div>
            </footer>
        );
    }
}

export default CUnderfooter;
