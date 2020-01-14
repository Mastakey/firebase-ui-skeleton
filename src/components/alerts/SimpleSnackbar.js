import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const styles = {};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SimpleSnackbar extends Component {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const open = this.state.open;
    return (
      <Snackbar
        open={open}
        onClose={this.handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={this.handleClose} severity="success">
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(SimpleSnackbar));
