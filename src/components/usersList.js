import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleUsername } from '../actions/ActionCreator';
import '../styles/users-list.css';
class UserList extends Component {
  setUsername (username) {
    const { handleUsername } = this.props;
    handleUsername(username);
    return true;
  }
  render () {
    const { username, avatar} = this.props;
    return (
      <div className='user-box'>
        <img className='avatar' src={avatar} alt='profile img' />
        <div className='user-info'>
          <h4 className='heading-4'>
            <Link className='heading-4' to='/user-details' onClick={() => this.setUsername(username)}>{username}</Link>
          </h4>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
  isLoading: state.isLoading,
  users: state.users,
  flag: state.flag,
  value: state.value,
  }
}
const mapDispatchToProps = {
  handleUsername

};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
