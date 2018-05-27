import React from "react";
import "../animate.css";
class ArrayItem extends React.Component {
    render() {
        const { id, firstName, text, avatar } = this.props;
        return (
            <li className="arrayItem">
                <img src={avatar} alt={firstName} />
                <h2>Personal number: {id}</h2>
                <h3>{firstName}</h3>
                <p>{text}</p>
            </li>
        );
    }
}
export default ArrayItem;
