import React, {Component} from 'react';

class CNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-sticky">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href={"index.html"}>Home</a>
                            </li>
                            <li>
                                <a href={"about.html"}>About</a>
                            </li>
                            <li className="dropdown">
                                {/*eslint-disable-next-line*/}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    More Pages <b className="caret"/>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href={"sidebar-left.html"}>Left Sidebar</a>
                                    </li>
                                    <li>
                                        <a href={"sidebar-right.html"}>Right Sidebar</a>
                                    </li>
                                    <li>
                                        <a href={"single.html"}>Blog Post</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href={"blog.html"}>Blog</a>
                            </li>
                        </ul>
                    </div>
                    {}
                </div>
            </nav>
        );
    }
}

export default CNavbar;
