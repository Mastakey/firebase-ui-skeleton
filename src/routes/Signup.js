import React, { Component } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, CircularProgress } from "@material-ui/core";

const styles = {};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username
    };
    await this.props.signupUser(userData, this.props.history);
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
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Signup</Typography>
        </Grid>
        <Grid item>
          <form>
            <TextField
              required
              fullWidth
              id="outlined-username-input"
              label="Username"
              className={classes.textField}
              type="username"
              name="username"
              autoComplete="username"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
            />
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
            <TextField
              required
              fullWidth
              id="outlined-confirm-password-input"
              name="confirmPassword"
              label="Confirm Password"
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
              Sign Up
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
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ user: state.user, UI: state.UI });

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(Signup)
);
