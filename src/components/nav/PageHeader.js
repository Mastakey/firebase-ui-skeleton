import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const styles = {
  header: {
    marginBottom: "20px"
  }
};

class PageHeader extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid container item xs={12} className={classes.header}>
        <Grid item xs={12}>
          <SimpleBreadcrumbs
            ancestors={this.props.ancestors}
            currentPage={this.props.currentPage}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            {this.props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    );
  }
}

PageHeader.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(PageHeader));
