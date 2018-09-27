import {React, Component} from 'react';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../Auth';
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
            {this.props.getId()}
            <ListItem button onClick={() => {this.signOut()}}>Sign Out</ListItem>
          </div>
        }
      </div>
    );
  };
}


export default withRouter(Auth0);