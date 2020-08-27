import React from "react"
import Useritem from "./Useritem"
import Spinner from "./Spinner"

class Users extends React.Component{
    constructor(){
     super()
     this.state={users :[] }
    }

    render(){
        return (
            <div style={userStyle}>
                {this.props.loading ? <Spinner /> : 
                this.props.users.map(user => <Useritem key={user.id} user={user} /> )} 
            </div>  )
        }
}


const userStyle={
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '1rem'
    }
export default Users 