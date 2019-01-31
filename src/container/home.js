import React, { Component } from 'react';
import Header from '../components/header';
import '../styles/home.css';
import '../styles/header.css';
import Loader from '../components/loader';
import { connect } from 'react-redux';
import UserList from '../components/usersList';

class Home extends Component {
  render () {
    return (
      <div className={`content ${this.props.isLoading ? 'is-loading' : ''}`}>
        <Header />
          <div className='userList'>
          { !this.props.isLoading &&  !this.props.flag && this.props.value !== '' && this.props.isEmpty  ? this.props.users.map((user) => {
            const { name, username, avatar, following, followers } = user;
            return <UserList {...this.props} key={username} username={username} name={name}
            avatar={avatar} value={this.props.value} following={following} followers={followers} />;
          }) : null
          }
      </div>
        <Loader />
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
        user: state.user,
        isEmpty: state.isEmpty
       }
    }
export default connect(mapStateToProps)(Home);
