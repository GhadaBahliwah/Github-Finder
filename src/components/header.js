import React from 'react';
import SearchBar from './search';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setUser} from '../actions/ActionCreator';
import '../styles/header.css';


const Header = () => (
  <div className='header'>
    <div className='title-container'>
      <h1 className='main-title'> 
        <Link className='main-title' to='/' onClick={() => this.setUser({user:null})}>Github Finder</Link>
      </h1>
    </div>
    <SearchBar />
  </div>
);

const mapDispatchToProps = {
setUser
}

export default connect(null, mapDispatchToProps)(Header);
