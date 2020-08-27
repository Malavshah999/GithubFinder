import React from 'react'
import { Link } from 'react-router-dom'


const Useritem =(props) =>{    
    const {login,avatar_url}=props.user
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" 
                style={{width: 60}}></img>
                <h4>{login}</h4>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1"> More</Link>
            </div>
    
    )
    }

export default Useritem