import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {};

class ObjectView extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            ObjectView
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

ObjectView.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(ObjectView));
