import react from "react";
import PropTypes from "prop-types";

export default function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
