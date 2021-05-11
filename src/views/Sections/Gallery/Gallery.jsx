import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import PageSection from "components/PageSection";
import Slides from "components/Slides"

const Gallery = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
    <Slides />
    </PageSection>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Gallery.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gallery;
