import React, {Component} from 'react';

class CRecentWorkItem extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="sidebar-right.html">
                  <span className="img">
                    <img src="assets/images/s1.jpg" alt=""/>
                    <span className="cover">
                      <span className="more">See details →</span>
                    </span>
                  </span>
                    <span className="title">
                    Lorem studios - interior and patio design
                  </span>
                </a>
                <span className="details">
                  <a href>Web design</a> | <a href>Logotype</a>
                </span>
                <h4>H4</h4>
                <p>P</p>
            </div>
        );
    }
}

export default CRecentWorkItem;
