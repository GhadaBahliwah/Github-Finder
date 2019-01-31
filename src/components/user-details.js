import React, { Component } from 'react';
import '../styles/user-details.css';
import {addRepositories, setUser, setIsEmptyState} from '../actions/ActionCreator';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class UserDetails extends Component {

    componentDidMount() {
    const {username}= this.props
    if(username !== ''){
    this.getUser(username);}
    this.getUserRepositories(username);
    }
    getUser= (username)=> {
        fetch(`https://api.github.com/users/`+username)
        .then(response => response.json())
        .then( data => this.props.setUser({
            user: {
                name: data["name"],
                username: data["login"],
                avatar: data["avatar_url"],
                following: data["following"],
                followers: data["followers"],
                repos_num: data["public_repos"],
                
            }, isEmpty: false
              

        }))
    }
    getUserRepositories = (username) => {
        if(username !== '' && username !== null){
        return fetch(`https://api.github.com/users/`+username+`/repos`)
         .then(response => response.json())
         .then( data =>  this.props.addRepositories({
            userRepos: data.map(repoObj => ({
                 repoName: repoObj["name"],
                 repoDesc: repoObj["description"],
                 repoURL: repoObj["svn_url"]
             })
             )}))}}

    render() {
       const {user, userRepos} = this.props;
       return ( 
           <div>  
               <div className='header'>
                 <div className='title-container'>
                    <h1 className='main-title'> 
                     <Link className='main-title' to='/' onClick={() => this.setUser({user:null})}>Github Finder</Link>
                    </h1>
                </div>
            </div>     
                
            { !this.props.isEmpty && user.username !== 'undefined' ? (
                <div className="user-info">
                 <div className="user-container">
                     <div className="personal-info">
                        <img className="user_avatar" src={user.avatar} alt="User img" /> 
                        <div className="text-sec">
                        <div className="text">
                            <h4 className="user_text"> {user.name} </h4>
                            <h4 className="username"> @{user.username}</h4>
                        </div>
    
                        <div className="follow-container">
                             <h4 className="following"><span>Following: </span>{user.following}</h4>
                            <h4 className="followers"><span>Followers: </span>{user.followers}</h4>
                             <h4 className="repo">  <span>Repositories:  </span> {user.repos_num}</h4> 
                        </div>
                    </div>
                    </div>

                    <div className='repoList'>
                    { userRepos.map((repo) => {
                    const { repoName, repoDesc, repoURL} = repo;
                    return(
                       <div className='repo-box' key={repoName}>
                        <div className='repo-info'>
                        <a href={repoURL} target="_blank"className='repoName'> {repoName} </a>
                        <h4 className="repoDesc">{repoDesc}</h4>
                        </div>
                  </div>
                    )})}

                    </div> 
                    </div>
                </div>
                ) : (<h1 className="error-msg">User undefined </h1> )}
            </div> 
      )
     }
    }
const mapStateToProps = (state) => {
    return{
        userRepos: state.userRepos,
        username:state.username,
        user: state.user,
        userRepos: state.userRepos,
        isEmpty: state.isEmpty
    }
}
const mapDispatchToProps = {
    addRepositories,
    setUser,
    setIsEmptyState
}
export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);