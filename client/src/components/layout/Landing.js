import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (

    <section className="landing">
         <div className="dark-overlay">
             <div className="landing-inner">
                 <h1 className="x-large">NetworkDeck</h1>
                 <p className="lead">This is the networking app</p>
                 <div className="buttons">
                     <Link to="/register" className="btn btn-primary">Sign up</Link>
                     <Link to="/login" className="btn">Login</Link>
                 </div>
             </div>
         </div>
     </section>

  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

Landing.propTypes ={
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps)(Landing);
