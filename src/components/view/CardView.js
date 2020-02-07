import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SimpleCard from "./SimpleCard";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

const styles = {
  listitem: {
    width: "100px",
    padding: 0
  }
};

class CardView extends Component {
  render() {
    const list = this.props.list;
    const reference = this.props.reference;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List component="nav" aria-label="main mailbox folders">
            {list.map(item => {
              const link = {
                title: item.name,
                url: `/${reference}/${item.id}`
              };
              return (
                <SimpleCard
                  key={item.id}
                  topHeader={``}
                  title={item.name}
                  subTitle={item.details}
                  content={``}
                  link={link}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    );
  }
}

CardView.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  reference: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(CardView));
