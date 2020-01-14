import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  loader: {
  }
};

class LoadingBasic extends Component {
  render() {
    const classes = this.props.classes;
    return <CircularProgress className={classes.loader}/>;
  }
}

LoadingBasic.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(LoadingBasic));
