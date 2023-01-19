import React, { Component } from 'react'
import GenericContent from './generic_content'

class Body extends Component {
  render() {
    return (
      <div>
      <div className='main_before'>
        <div id="main">

          <header className="major container medium">
            <h2>We conduct experiments that
              <br />
              may or may not seriously
              <br />
              break the universe</h2>
            <p>Tellus erat mauris ipsum fermentum<br />
              etiam vivamus nunc nibh morbi.</p>
          </header>

          <div className="box alt container">
            <section className="feature left">
              <a href="#" className="image icon solid fa-signal"><img src="images/pic01.jpg" alt="" /></a>
              <div className="content">
                <h3>The First Thing</h3>
                <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus.</p>
              </div>
            </section>
            <section className="feature right">
              <a href="#" className="image icon solid fa-code"><img src="images/pic02.jpg" alt="" /></a>
              <div className="content">
                <h3>The Second Thing</h3>
                <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus.</p>
              </div>
            </section>
            <section className="feature left">
              <a href="#" className="image icon solid fa-mobile-alt"><img src="images/pic03.jpg" alt="" /></a>
              <div className="content">
                <h3>The Third Thing</h3>
                <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus.</p>
              </div>
            </section>
          </div>

          <footer className="major container medium">
            <h3>Get shady with science</h3>
            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus.</p>
            <ul className="actions special">
              <li><a href="#" className="button">Join our crew</a></li>
            </ul>
          </footer>

        </div></div>
      </div>
    )
  }
}

export default Body
