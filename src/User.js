import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Repos} from './Repos'
 class User extends Component {
     componentDidMount()
     {
         this.props.getUser(this.props.match.params.login)
         this.props.getRepos(this.props.match.params.login)
 }
    render() {
        const{name,location,company,avatar_url,hireable,following,public_repos,public_gists,
            followers,html_url,bio,blog
            }=this.props.user
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back</Link>
                <div className="card grid-2">
                    
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" 
                        style={{width: 150}}/>
                        <h1>{name}</h1>
                        <p><b>Location: </b>{location}</p>
                    </div>
                    
                    <div>
                        <ul>
                        <li>    
                            {bio && <Fragment>
                            Bio:{bio}</Fragment>}
                            <br/><a href={html_url} className="btn btn-dark">Visit Github</a>
                        </li>
                        <li>
                            {company && <Fragment>
                            Company :{company}</Fragment>}<br/>
                        </li>
                        </ul>
                    </div>
                
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-danger">Following : {following}</div>
                    <div className="badge badge-light">Public Repos : {public_repos}</div>
                    <div className="badge badge-dark">Gists : {public_gists}</div>
                </div> 
                <Repos repos={this.props.repos}/>
            </Fragment>
        )
    }
}

export default User
