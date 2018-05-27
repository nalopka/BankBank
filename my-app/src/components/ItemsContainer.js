import React from "react";

import TopNavbar from "./TopNavbar";
import LeftBar from "./LeftBar";
class ItemsContainer extends React.Component {
    state = {
        isTop: true,
        isLeft: false
    };
    getScrollPosiiton = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        scrollPosition > 230
            ? this.setState({ isTop: false })
            : this.setState({ isTop: true });
        scrollPosition > 120
            ? this.setState({ isLeft: true })
            : this.setState({ isLeft: false });
    };
    componentWillMount() {
        document.addEventListener("scroll", this.getScrollPosiiton);
    }
    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    render() {
        const { isTop, isLeft } = this.state;
        return (
            <React.Fragment>
                <TopNavbar isTop={isTop} />
                <LeftBar isLeft={isLeft} />
                <span
                    className={`toTopButton ${isTop ? `hidden` : ``}`}
                    onClick={this.scrollToTop}
                />
            </React.Fragment>
        );
    }
}
export default ItemsContainer;
