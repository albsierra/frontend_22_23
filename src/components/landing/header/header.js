import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/auth'
import reactLogo from 'images/logo512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

//  const { user } = useAuth({ middleware: 'guest' })

class Header extends Component {
	render() {
		return (
			<div>
				<header id="headerFI">
					<h1><a href="index.html">Future Imperfect</a></h1>
					<nav className="links">
						<ul>
							<li><a href="#">Lorem</a></li>
							<li><a href="#">Ipsum</a></li>
							<li><a href="#">Feugiat</a></li>
							<li><a href="#">Tempus</a></li>
							<li><a href="#">Adipiscing</a></li>
						</ul>
					</nav>
					<nav className="main">
						<ul>
							<li className="search">
								<a href="#search" className='icon solid fa-search'>
									<div className="headerFI_Main_before">
										<FontAwesomeIcon icon={faSearch} />
									</div>
									Search
								</a>
								<form id="search" method="get" action="#">
									<input type="text" name="query" placeholder="Search" />
								</form>
							</li>
							<li className="menu">
								<a className="icon solid fa-bars" href="#menu">
									<div className="headerFI_Main_before">
										<FontAwesomeIcon icon={faBars} />
									</div>
									Menu</a>
							</li>
						</ul>
					</nav>
				</header>

				<section id="menu">

					<section>
						<form className="search" method="get" action="#">
							<input type="text" name="query" placeholder="Search" />
						</form>
					</section>

					<section>
						<ul className="links">
							<li>
								<a href="#">
									<h3>Lorem ipsum</h3>
									<p>Feugiat tempus veroeros dolor</p>
								</a>
							</li>
							<li>
								<a href="#">
									<h3>Dolor sit amet</h3>
									<p>Sed vitae justo condimentum</p>
								</a>
							</li>
							<li>
								<a href="#">
									<h3>Feugiat veroeros</h3>
									<p>Phasellus sed ultricies mi congue</p>
								</a>
							</li>
							<li>
								<a href="#">
									<h3>Etiam sed consequat</h3>
									<p>Porta lectus amet ultricies</p>
								</a>
							</li>
						</ul>
					</section>

					<section>
						<ul className="actions stacked">
							<li><a href="#" className="button large fit">Log In</a></li>
						</ul>
					</section>

				</section>

				<div className='header_before header_after'>
					<div id="header">
						<div className='icon_before'>
							<span className="logo icon fa-paper-plane">
								<FontAwesomeIcon icon={faPaperPlane} /></span>
						</div>
						<h1>Hi. This is Directive.</h1>
						<p>A responsive HTML5 + CSS3 site template designed by <a href="http://html5up.net">HTML5 UP</a>
							<br />
							and released for free under the <a href="http://html5up.net/license">Creative Commons license</a>.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Header