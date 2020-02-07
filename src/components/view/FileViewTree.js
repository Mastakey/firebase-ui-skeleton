import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const styles = {
  paper: {
    padding: "20px"
  }
};

const getFileNames = data => {
  let files = [];
  for (let i = 0; i < data.length; i++) {
    files.push({
      name: data[i].folder + data[i].name,
      id: data[i].id
    });
  }
  return files;
};

class FileView extends Component {
  render() {
    const classes = this.props.classes;
    const title = this.props.title;
    const list = this.props.list;
    const fileNames = getFileNames(list);
    console.log(JSON.stringify(fileNames));
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">{title}</Typography>
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" />
                <TreeItem nodeId="4" label="Webstorm" />
              </TreeItem>
              <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="6" label="Material-UI">
                  <TreeItem nodeId="7" label="src">
                    <TreeItem nodeId="8" label="index.js" />
                    <TreeItem nodeId="9" label="tree-view.js" />
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeView>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

FileView.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(FileView));
