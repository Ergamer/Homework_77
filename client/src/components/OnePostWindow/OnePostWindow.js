import React, {Component} from 'react';
import './OnePostWindow.css';

class OnePostWindow extends Component {

    render () {
        return (
            <div className="OnePostWindow">
                <h2>{this.props.author}</h2>
                <p>{this.props.text}</p>
                <img src={this.props.image} alt=""/>
            </div>
        );
    }
}

export default OnePostWindow;