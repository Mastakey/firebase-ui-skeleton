import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, CircularProgress } from "@material-ui/core";

const styles = {};

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    await this.props.loginUser(userData, this.props.history);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const classes = this.props.classes;
    const loading = this.props.UI.loading;
    //Errors
    const errors = this.props.UI.errors;
    const keys = errors ? Object.keys(errors) : [];
    let errorStr = "";
    keys.forEach(key => {
      errorStr += errors[key];
    });
    return (
      <div>
        <Fragment>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h2">Login</Typography>
            </Grid>
            <Grid item>
              <form>
                <TextField
                  required
                  fullWidth
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  fullWidth
                  id="outlined-password-input"
                  name="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                  disabled={loading}
                >
                  Sign In
                  {loading && (
                    <CircularProgress size={30} className={classes.progress} />
                  )}
                </Button>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="secondary">
                {this.props.UI.errors && errorStr}
              </Typography>
            </Grid>
          </Grid>
        </Fragment>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Login));
