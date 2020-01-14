import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const styles = {};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class NavProfile extends Component {
  constructor() {
    super();
    this.state = {
      profileOpen: false,
      anchorEl: null
    };
  }

  handleAvatarClick = event => {
    this.setState({
      profileOpen: true,
      anchorEl: event.currentTarget
    });
  };
  handleClose = () => {
    this.setState({
      profileOpen: false,
      anchorEl: null
    });
  };
  render() {
    return (
      <Fragment>
        <Button onClick={this.handleAvatarClick.bind(this)}>
          <Avatar />
        </Button>
        <Popover
          open={this.state.profileOpen}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose.bind(this)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="/logout">
              <ListItemText primary="Logout" />
            </ListItemLink>
          </List>
        </Popover>
      </Fragment>
    );
  }
}

NavProfile.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(NavProfile));
