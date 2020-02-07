import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  paper: {
    padding: "20px"
  },
  listitem: {
    width: "100px",
    padding: 0
  }
};

class PaperList extends Component {
  render() {
    const classes = this.props.classes;
    const title = this.props.title;
    const list = this.props.list;
    const reference = this.props.reference;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">{title}</Typography>
            <List>
              {list.map(item => {
                return (
                  <Link to={`/${reference}/${item.id}`} key={item.name}>
                    <ListItem button className={classes.listitem}>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

PaperList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(PaperList));
