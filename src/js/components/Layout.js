import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {

  render () {
    return (
      <div>
        <h1>Layout</h1>

        {this.props.children}

        <Link to='/'>Show Page1</Link> 
        <Link to='page2'>Show Page2</Link>
        <Link to='page3'>Show Page3</Link>
      </div>        
    );
  }
}
