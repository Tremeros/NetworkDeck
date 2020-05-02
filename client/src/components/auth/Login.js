import React,{ Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const Login = ({login, isAuthenticated}) => {

   const [formData, setFormData] = useState({
     email: '',
     password: ''
   });

   const { email, password } = formData;
   const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

   const onSubmit = async e => {
     e.preventDefault();
      login(email, password);
     }
     // Redirect if loged in

     if(isAuthenticated) {
       return <Redirect to='/dashboard' />
     }


  return (
    <Fragment>
    <h1 className="large text-primary">Sign In</h1>
    <p className="lead"><i className="fas fa-user"></i>Sign into Your account</p>
    <form onSubmit={e => onSubmit(e)} className="form">
      <div className="form-group">
         <input type="email" placeholder="Email adress" name="email" value={email} onChange={e => onChange(e)} />
     </div>
     <div className="form-group">
         <input type="password" placeholder="Password" minlength="6" name="password" value={password} onChange={e => onChange(e)}/>
     </div>
     <input type="submit" value="Login" className="btn btn-primary"/>
    </form>
    <p className="my-1">
        Have no account?
        <Link to="/register">Sign in</Link>
    </p>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
