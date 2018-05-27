import React, { Component } from "react";
class LeftBar extends Component {
    render() {
        const { isLeft } = this.props;
        return (
            <div className={`leftBar ${isLeft ? `fixedLeft` : ``}`}>
                <i className="icon1" />
                <i className="icon2" />
                <i className="icon3" />
                <i className="icon4" />
                <i className="icon5" />
            </div>
        );
    }
}

export default LeftBar;
