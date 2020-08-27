import React from 'react'
import './App.css'
import Navbar from "./Navbar"
import Users from "./Users"
import axios from "axios"
import Search from "./Search"
import { Alert } from"./Alert"
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom' 
import {About} from "./About"
import User from "./User"

class App extends React.Component{
    
  state ={
    users:[],
    loading:false,
    alert: null,
    user:{},
    repos:[]
  }
  /* async componentDidMount()
  {
    this.setState({loading:true})
    const res = await axios.get('https://api.github.com/users')

    this.setState({users:res.data,loading:false})
  }  */
  searchUsers = async (text)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    this.setState({users:res.data.items})
    this.setState({loading:false})
  }
  getUser =async (username)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}`)
    this.setState({user:res.data})
    this.setState({loading:false})
  }
  getRepos =async (username)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
    this.setState({repos:res.data})
    this.setState({loading:false})
  }
  clearUsers = ()=>{
    this.setState({users:[]})
  }
  setAlert=(message,type)=>{
    this.setState({alert:{message:message,type:type}})
    setTimeout(()=>this.setState({alert:null}),2000)
  }
  render() {
      return (
        <Router>
          <div className='App'>
            <Navbar title=" Github Finder" icon ="fab fa-github"/>
            <Switch>
                <Route exact path='/' render={() =>(
                  <div>{/* <Fragment> */}
                      <Alert alert={this.state.alert} />
                  <div className='container'>
                    <Search 
                      searchUsers={this.searchUsers}
                      clearUsers ={this.clearUsers}
                      showClear={this.state.users.length>0?true : false }
                      setAlert={this.setAlert}
                    />
                    <Users 
                    users={this.state.users} 
                    loading={this.state.loading}
                    />
                  </div>
                  </div>/*</Fragment>*/  
                )}/>

              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props=>(
                <User {...props} getUser={this.getUser} 
                getRepos={this.getRepos}
                repos={this.state.repos}
                user={this.state.user} 
                />
              ) } />
            </Switch>
              
          </div>
        </Router>
      )  
    }
}
export default App;
