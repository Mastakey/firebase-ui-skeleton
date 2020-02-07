import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import Unauth from "./Unauth";
import TokenExpired from "./TokenExpired";
import ShowObject from "./ShowObject";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {};

class ErrorHandler extends Component {
  render() {
    const error = this.props.error;
    let errorView;
    if (error.error && error.error === "Unauthorized" && error.function === "fbAuth"){
      errorView = <Unauth error={error}/>
    }
    else if(error.code && error.code === "auth/id-token-expired")
    {
      errorView = <TokenExpired error={error} />
    }
    else {
      errorView = <ShowObject error={error} />
    }
    return (
      <Fragment>{errorView}</Fragment>
    );
  }
}

ErrorHandler.propTypes = { classes: PropTypes.object.isRequired, error: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(ErrorHandler));
