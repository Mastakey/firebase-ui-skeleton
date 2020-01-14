import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  error: {
    color: "red"
  }
};

class ErrorMessages extends Component {
  handleObject(object, classes) {
    const keys = Object.keys(object);
    return keys.map(key => {
      return (
        <Typography variant="body1" key={object} className={classes.error}>
          {object[key]}
        </Typography>
      );
    });
  }
  render() {
    const classes = this.props.classes;
    const errors = this.props.errors;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {errors.map(error => {
            //const type = typeof error;
            return this.handleObject(error, classes);
          })}
        </Grid>
      </Grid>
    );
  }
}

ErrorMessages.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.array.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(ErrorMessages));
