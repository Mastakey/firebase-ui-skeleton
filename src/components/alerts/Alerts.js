import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import SimpleSnackbar from "./SimpleSnackbar";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {};

class Alerts extends Component {
  render() {
    const messages = this.props.UI.messages;
    return (
      <Fragment>
        {messages && messages.length > 0 && (messages.map(message =>{
           return <SimpleSnackbar key={message.id} message={message.message} />;
        }))}
      </Fragment>
    );
  }
}

Alerts.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ UI: state.UI });

export default connect(mapStateToProps, null)(withStyles(styles)(Alerts));
