import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../utils/Auth';
const jwt = require('jsonwebtoken');

class Auth0 extends Component {
  
    // const getId = () => {
    //   let token = auth0Client.getIdToken();
    //   let decodedObj = jwt.decode(token)
    //   console.log(decodedObj);
    //   console.log(decodedObj.sub); //this is the user_id
    // };

    
  signOut = (props) => {
    auth0Client.signOut();
    props.history.replace('/');
  };

<<<<<<< HEAD
  signIn = () => {
    console.log("sign in called");
    auth0Client.signIn();
=======

>>>>>>> 5746b51378d5e09f1080fd597c6d9ed1e6f85856

//  /*  signIn = () => {
//     auth0Client.signIn();
//   } */
 
//   setUserId = async () => {
//     const loginStatus = await new Promise ((resolve, reject) => {
//       auth0Client.signIn();

//       if(){
//         resolve(this.props.setId);
//       }else{
//         reject("something went wrong");
//       }
//     });
//     /* this.signIn.then(this.props.setId); */
//     console.log(loginStatus);
//   }

  render() {
   
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <ListItem button onClick={auth0Client.signIn}>Sign In</ListItem>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <ListItem button onClick={() => {this.signOut()}}>Sign Out</ListItem>
          </div>
        }
      </div>
    );
  };
}


export default withRouter(Auth0);