import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-homepage">
      <div className="body">
        <div className="is-preload">
          <div id="wrapper">
            <div id="main">
              <div className="inner">
                <header>
                  <h1>Kid's stories</h1>
                </header>
                <section className="tiles">
                  <article className="style1">
                    <span className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </span>
                    <NavLink to="/activities" className="navlink">
                      <h2>Activities</h2>
                      <div className="content">
                        <p>Plan your children's activities</p>
                      </div>
                    </NavLink>
                  </article>
                  <article className="style2">
                    <span className="image">
                      <img src="images/pic02.jpg" alt="" />
                    </span>
                    <NavLink to="/kidstree" className="navlink">
                      <h2>Kid's tree</h2>
                      <div className="content">
                        <p>Keep unforgettable memories</p>
                      </div>
                    </NavLink>
                  </article>
                  <article className="style3">
                    <span className="image">
                      <img src="images/pic03.jpg" alt="" />
                    </span>
                    <a href="#">
                      <h2>Healt Carnet</h2>
                      <div className="content">
                        <p>Keep health information</p>
                      </div>
                    </a>
                  </article>
                  <article className="style4">
                    <span className="image">
                      <img src="images/pic04.jpg" alt="" />
                    </span>
                    <a href="#">
                      <h2>Stages</h2>
                      <div className="content">
                        <p></p>
                      </div>
                    </a>
                  </article>
                  <article className="style5">
                    <span className="image">
                      <img src="images/pic05.jpg" alt="" />
                    </span>
                    <a href="#">
                      <h2>@ school</h2>
                      <div className="content">
                        <p>Keep in touch with their school</p>
                      </div>
                    </a>
                  </article>
                  <article className="style6">
                    <span className="image">
                      <img src="images/pic06.jpg" alt="" />
                    </span>
                    <a href="#">
                      <h2>Food</h2>
                      <div className="content">
                        <p>Find healthy recipes</p>
                      </div>
                    </a>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
