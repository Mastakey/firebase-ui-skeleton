import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    padding: 10
  },
  header: {
    marginBottom: 10
  },
  mdoc: {}
};

export class Home extends Component {
  render() {
      const classes = this.props.classes;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h2">Home</Typography>
            <Typography variant="body1">Hello!</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(withStyles(styles)(Home));
