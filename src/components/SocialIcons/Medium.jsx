import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Medium = ({ userName }) => (
  <CircleIcon href={`https://instagram.com/@${userName}`} iconName="InstagramIcon" />
);

Medium.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Medium;
