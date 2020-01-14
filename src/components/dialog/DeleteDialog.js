import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {};

class DeleteDialog extends Component {
  async handleDelete() {
    await this.props.deleteFunction();
  }
  render() {
    return (
      <Fragment>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Delete {this.props.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Click Delete to confirm deletion
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleDelete.bind(this)}
              color="secondary"
            >
              Delete
            </Button>
            <Button
              onClick={this.props.handleClose}
              color="primary"
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteFunction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(DeleteDialog));
