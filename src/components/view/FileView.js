import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  paper: {
    padding: "20px"
  },
  listItem: {
    padding: 0
  }
};

// const getFileNames = data => {
//   let files = [];
//   for (let i = 0; i < data.length; i++) {
//     files.push({
//       name: data[i].folder + data[i].name,
//       id: data[i].id
//     });
//   }
//   return files;
// };

class FileView extends Component {
  render() {
    const classes = this.props.classes;
    const list = this.props.list;
    //const fileNames = getFileNames(list);
    return (
      <List dense={true}>
        {list.map(item => {
          const filePath = item.folder + item.name;
          return (
            <Link key={item.name} to={`/code/${item.id}`}>
              <ListItem className={classes.listItem}>
                <ListItemText primary={`${filePath}`}></ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    );
  }
}

FileView.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(FileView));
