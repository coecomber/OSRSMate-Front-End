import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render(){
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        console.log(auth);

        return(
            <div className="container">
                <h5 className="grey-text text-darken-3">Profile</h5>
                <p>Mail: {auth.email}</p>
                <br /><br />

                <h5>Characters</h5>
                <h6>My connected characters</h6>
                <p>None yet</p>

                <br /><br />
                <h5>Connect new character</h5>
                <div className="input-field">
                        <label htmlFor="Username">Username</label>
                        <input type="text" id="Username" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add new Character</button>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Profile)