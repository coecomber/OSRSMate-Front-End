import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />
    
    return (
        <div>
            <nav className="nav-wrapper grey darken-4" style={{marginBottom: 0}}>
                <Link to='/' className="OSRSMate logo"><b style={{fontSize: '14px'}}>	&nbsp; OSRSMate</b></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {auth.isLoaded && links }
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
} 

export default connect(mapStateToProps)(Navbar)