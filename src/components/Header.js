
import React, { Component } from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    render(){
        return(
            <div id="header">
                <h1>
                    <a href="https://yts.mx/">
                        <img src="/logo-YTS.svg" alt='로고'/>
                    </a>
                    <FontAwesomeIcon icon={faClapperboard} />
                    <span>Introduce Movie List</span>
                </h1>
            </div>
        );
    }
}

export default Header;
