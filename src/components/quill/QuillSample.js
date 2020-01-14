import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Quill
import ReactQuill from "react-quill";
import QuillSettings from "./QuillSettings";
import "react-quill/dist/quill.snow.css";

const styles = {};

class QuillSample extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      delta: []
    };
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            QuillSample
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ReactQuill
            value={this.state.content}
            modules={QuillSettings.modules}
            formats={QuillSettings.formats}
            name="content"
            onChange={this.handleQuillChange}
          />
        </Grid>
      </Grid>
    );
  }
}

QuillSample.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(QuillSample));
