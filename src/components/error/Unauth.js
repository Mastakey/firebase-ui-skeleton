import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {};

class Unauth extends Component {
  render() {
    const error = this.props.error;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            {error.error}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Unauth.propTypes = { classes: PropTypes.object.isRequired, error: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(Unauth));
