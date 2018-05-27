import React, { Component } from "react";
class TopNavbar extends Component {
    render() {
        const { isTop } = this.props;
        return (
            <nav>
                <span className="logo" />
                <div className={`navbar ${isTop ? `top` : `fixed`}`}>
                    <a href="#">Oculus</a>
                    <a href="#">Shader Graph</a>
                    <a href="#">Magic Leap</a>
                    <a href="#">Мобильный AR</a>
                    <a href="#">Multiplay</a>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;
