import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Wrapper from './components/Wrapper';
import Home from './components/Pages/Home';
import Landing from './components/Pages/Landing';
import Results from './components/Pages/Results';
import Theme from './Theme';
//import Sample from './components/Sample';
import Callback from './Callback';
import { BrowserRouter as Router, Route } from "react-router-dom";
import auth0Client from './utils/Auth';
import jwt from 'jsonwebtoken';



class App extends Component {

  state = {
    auth: "no",
    test: 'test'
  };

  getId = () => {
    return new Promise((resolve,reject) => {
      let token = auth0Client.getIdToken();
      console.log(token);
      let decodedObj = jwt.decode(token)
      console.log(decodedObj);
     // console.log(decodedObj.sub); //this is the user_id
      
     if(decodedObj !== null){
  
       resolve(decodedObj);
     }
  
     //do reject
    
    });
  }

  setId = async () => {
    const loginId = await this.getId(); 
    console.log(loginId);
   
      this.setState({
        auth: loginId
      })
   
     };
   
 
   componentDidMount(){
     if(this.state.auth === "no"){
       this.setId();
     }
 
   }

  render() {
    return (
      <Theme>
        <React.Fragment>
          <CssBaseline />
          <Router>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/user' component={Home}/>
            <Route exact path='/favorites' component={()=>(<Results favs={true} />)} />
            <Route path='/results' component={()=>(<Results favs={false} />)} />
            <Route exact path='/callback' component={Callback}/>
            {/* <Route exact path='/sample' component={Sample} /> */}
          </div>
          </Router>
        </React.Fragment>
        {/* <Sample></Sample> */}
      </Theme>
    );
  }
}

export default App;
