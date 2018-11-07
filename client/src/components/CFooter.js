import React, {Component} from 'react';

class CFooter extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Contact</h3>
                            <div className="widget-body">
                                <p>
                                    +234 23 9873237
                                    <br/>
                                    <a href="mailto:#">some.email@somewhere.com</a>
                                    <br/>
                                    <br/>
                                    234 Hidden Pond Road, Ashland City, TN 37015
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Follow me</h3>
                            <div className="widget-body">
                                <p className="follow-me-icons">
                                    <a href>
                                        <i className="fa fa-twitter fa-2"/>
                                    </a>
                                    <a href>
                                        <i className="fa fa-dribbble fa-2"/>
                                    </a>
                                    <a href>
                                        <i className="fa fa-github fa-2"/>
                                    </a>
                                    <a href>
                                        <i className="fa fa-facebook fa-2"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Text widget</h3>
                            <div className="widget-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Atque, nihil natus explicabo ipsum quia iste aliquid repellat
                                    eveniet velit ipsa sunt libero sed aperiam id soluta officia
                                    asperiores adipisci maxime!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Atque, nihil natus explicabo ipsum quia iste aliquid repellat
                                    eveniet velit ipsa sunt libero sed aperiam id soluta officia
                                    asperiores adipisci maxime!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Form widget</h3>
                            <div className="widget-body">
                                <p>
                                    +234 23 9873237
                                    <br/>
                                    <a href="mailto:#">some.email@somewhere.com</a>
                                    <br/>
                                    <br/>
                                    234 Hidden Pond Road, Ashland City, TN 37015
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/row of widgets*/}
                </div>
            </footer>
        );
    }
}

export default CFooter;
