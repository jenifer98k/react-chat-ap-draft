import React ,{Component} from 'react'
import  './nav.css';
import Logo from "./../../img/logo1.png";
export default  class Nav extends Component{
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={Logo}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}

