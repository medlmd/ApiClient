import React from 'react';
import DesktopNavBar from "./DesktopNavBar";
import MobilNavBar from "./MobilNavBar";

class NavBar extends React.Component {

    state = {
        displayNav: false
    }
    buttonhundle = () => {
        this.setState( prevState =>{
            return {displayNav: !prevState.displayNav}
    })
    }

    render(){
        return(
    <div>
        <DesktopNavBar buttonhundle={this.buttonhundle}></DesktopNavBar>
        <MobilNavBar displayNav={this.state.displayNav} ></MobilNavBar>
    </div>
    )
    }
}
export default NavBar;