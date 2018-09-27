import React from 'react';
import Home from './../Pages/Home';
import Results from './../Pages/Results';


class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Results favs={true} />
        {/* <Home /> */}
      </div>
    )
  }
}

export default Wrapper;