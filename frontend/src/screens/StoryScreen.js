import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Storyscreen = ({ match }) => {
  const [detail, setDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  let [indexes, manageIndex] = useState([]);

  indexes = ["0", "1", "2", "3", "4"];

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/${match.params.id}`);

      setDetails(data);
      setLoading(false);
    };

    manageIndex(
      indexes.filter((id) => {
        if (id !== match.params.id) return id;
      })
    );

    getData();
  }, [match]);

  let nextRandomStory = indexes[Math.floor(indexes.length * Math.random())];

  return (
    <div>
      {isLoading ? (
        <div className="my-loader is-flex is-justify-content-center pt-6">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      ) : (
        <div>
          <NavBar></NavBar>
          <section
            className="hero is-medium"
            style={{
              backgroundImage: `url(${detail.book.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-body"></div>
          </section>
          <div className="container is-max-desktop ">
            <p className="title custom-title py-4 my-0 is-size-2">
              {detail.book.title}
            </p>

            <p className="is-size-5 other-font text">
              {detail.book.description}
            </p>

            <Link
              className="button is-link my-6 is-rounded other-font"
              to={`/${nextRandomStory}`}
            >
              Read More Stories!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Storyscreen;
