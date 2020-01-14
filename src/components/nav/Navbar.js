import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import NavProfile from "./NavProfile";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  home: {
    flexGrow: 1,
    justifyContent: "flex-start"
  }
};

export class Navbar extends Component {
  render() {
    const classes = this.props.classes;
    const authenticated = this.props.authenticated;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="nav-container">
            <div className={classes.home}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
            </div>
            {!authenticated ? (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </Fragment>
            ) : (
              <NavProfile />
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, {})(withStyles(styles)(Navbar));
