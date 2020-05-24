import React, { Component } from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        const { posts, notifications } = this.props;

        return(
            <div className="Dashboard container">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={ posts }/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={ notifications }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', limit: 4, orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 8, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)