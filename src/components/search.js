import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSubmitAction, setUsers } from '../actions/ActionCreator';
import { IoMdSearch } from "react-icons/io";


class SearchBar extends Component {
    state={
      value: '',
    }

    componentDidMount (value) {
      this.searchGithubUser(value);
    }

    onChange = (event) => {
      const { value } = event.target;
      this.setState({
        value
      });
    }

    onSubmitHandler = (event) => {
      event.preventDefault();
      const { value } = this.state;
      this.props.onSubmitAction({ isLoading: true, flag: true, value });
      this.componentDidMount(value);
    }

    searchGithubUser = (value) => {
      if (value !== '') {
        fetch(`http://api.github.com/search/users?per_page=100&q=${value}`)
          .then((response) => response.json())
          .then((data) => this.props.setUsers({
              users: data.items.map((user) => ({
              username: `${user.login}`,
              avatar: `${user.avatar_url}`,
              following: `${user.following}`,
              followers: `${user.followers}`,
              name: `${user.username}`

            })),
            isLoading: false,
            flag: false
          }))
          .catch((error) => console.log('parsing failed', error));
      }
    }


    render () {
      return (
        <form className='search-bar'>
          <input
            type='text' className='user-input' placeholder='Enter Username' refs='username'
            onChange={this.onChange}
          />
          <button className="btn"onClick={this.onSubmitHandler}><IoMdSearch className="search__icon"/></button>
        </form>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    flag: state.flag
  }
}
const mapDispatchToProps = {
  onSubmitAction,
  setUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// eslint
// ecma2015
