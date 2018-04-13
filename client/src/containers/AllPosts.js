import React, {Component} from 'react';
import './AllPosts.css';
import OnePostCreator from "../components/OnePostCreator/OnePostCreator";
import OnePostWindow from "../components/OnePostWindow/OnePostWindow";
import {connect} from "react-redux";
import {fetchGetPost} from "../store/actions";

class AllPosts extends Component {


    componentDidMount = () => {
        this.props.fetchGetPost()
    };


    render () {
        return (
            <div className="AllPosts">
                <OnePostCreator/>
                {this.props.posts.map((post) => {
                    console.log(post)
                    return (<OnePostWindow
                        author={post.author}
                        text={post.text}
                        image={'http://localhost:8000/uploads/' + post.image}
                    />)
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetPost: () => dispatch(fetchGetPost()),

    }
};

export default connect (mapStateToProps, mapDispatchToProps)(AllPosts);