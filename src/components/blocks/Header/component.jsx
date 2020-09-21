import React, { Fragment } from 'react'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

import './styles.css'

const Header = () => {
	const linksHeader = { 
		textDecoration: "none",
		color: "#ffffff",
	}
	return (
		<Fragment>
			<div className="header">
				<img className="logoRickAndMorty" src={logo} alt="Rick And Morty"/>
				<div className="title">Rick and Morty</div>
				<div class="hamburgerMenu">
    			<input id="menuToggle" type="checkbox" />
    			<label class="menuBtn" for="menuToggle">
      			<span></span>
    			</label>
    			<ul class="menuBox">
      			<li><a class="menuItem" href="/characters">Characters</a></li>
						<li><a class="menuItem" href="/locations">Locations</a></li>
						<li><a class="menuItem" href="/episodes">Episodes</a></li>
    			</ul>
  			</div>
				<ul className="navRickAndMorty">
					<Link style={linksHeader} to="/characters">
						<li>Characters</li>
					</Link>
					<Link style={linksHeader} to="/locations">
						<li>Locations</li>
					</Link>
					<Link style={linksHeader} to="/episodes">
						<li>Episodes</li>
					</Link>
				</ul>
			</div>
		</Fragment>
	)
}

export default Header
