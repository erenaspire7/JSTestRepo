import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeScreen = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="hero is-fullheight is-danger custom">
        <div className="container is-max-desktop is-justify-content-center is-flex">
          <div className="columns is-vcentered mx-0 my-0">
            <div className="column has-text-left">
              <p className="title custom-title">Read A Book Today!</p>
              <p className="subtitle other-font">
                Read various specially picked children books. It's free too!
              </p>

              <Link
                to={`/${Math.floor(Math.random() * 4)}`}
                className="button is-outlined is-primary other-font"
              >
                Click to Read!
              </Link>
            </div>
            <div className="column">
              <figure class="image is-justify-content-end is-flex">
                <img
                  src="https://res.cloudinary.com/erenaspire7/image/upload/v1618353481/Project/annie-spratt-hDcAjjkM-PU-unsplash_flojtt.jpg"
                  className="my-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
