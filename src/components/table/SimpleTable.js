import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {};

class SimpleTable extends Component {
  createHeaders(headers) {
    return (
      <TableRow>
        {headers
          .filter(filter => filter !== "options")
          .map(header => {
            return <TableCell key={header}>{header}</TableCell>;
          })}
      </TableRow>
    );
  }

  createRow(headers, row, reference) {
    return (
      <TableRow key={row.id}>
        {headers
          .filter(filter => filter !== "options")
          .map(header => {
            let myRow = (
              <TableCell key={header + row.id}>{row[header]}</TableCell>
            );
            if (header === "id") {
              let url = `/${reference}/${row.id}`;
              myRow = (
                <TableCell key={header + row.id}>
                  <a href={url}>{row[header]}</a>
                </TableCell>
              );
            }
            return myRow;
          })}
      </TableRow>
    );
  }

  render() {
    const classes = this.props.classes;
    const data = this.props.data;
    const headers = this.props.headers;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>{this.createHeaders(headers)}</TableHead>
          <TableBody>
            {data.map(row =>
              this.createRow(headers, row, this.props.reference)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

SimpleTable.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  reference: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(withStyles(styles)(SimpleTable));
