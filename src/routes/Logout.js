import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../redux/actions/userActions";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {};

class Logout extends Component {
  async componentDidMount() {
    await this.props.logoutUser();
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            Logout
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Logout.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { logoutUser })(
  withStyles(styles)(Logout)
);
