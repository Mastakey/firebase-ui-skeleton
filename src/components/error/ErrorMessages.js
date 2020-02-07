import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  error: {}
};

const handleMessages = (messages, classes) => {
  return messages.map(message => {
    return (
      <Typography
        key={message}
        variant="body1"
        color="secondary"
        className={classes.error}
      >
        {message}
      </Typography>
    );
  });
};
const handleObject = (obj, classes) => {
  const messages = obj.messages;
  return handleMessages(messages, classes);
};
const handleString = (str, classes) => {
  return (
    <Typography
      key={str}
      variant="body1"
      color="secondary"
      className={classes.error}
    >
      {str}
    </Typography>
  );
};

const handleError = (error, classes) => {
  if (typeof error === "object") {
    return handleObject(error, classes);
  } else {
    return handleString(error, classes);
  }
};

class ErrorMessages extends Component {
  render() {
    const classes = this.props.classes;
    const error = this.props.error;
    console.log(error.error);
    if (
      error &&
      error.error &&
      typeof(error.error) === "object" &&
      error.error.length > 0
    ) {
      const errors = error.error;
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {errors.map(error => {
              return handleError(error, classes);
            })}
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="secondary"
            className={classes.error}
          >
            {error.error}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

// {
//   errors.map(error => {
//     //const type = typeof error;
//     if (error.messages && error.messages.length > 0) {
//       return this.handleMessages(error.messages, classes);
//     } else {
//       return this.handleString(error, classes);
//     }
//   });
// }

ErrorMessages.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(ErrorMessages));
