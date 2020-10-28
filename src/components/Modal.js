import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, IconButton } from "@material-ui/core";

const Modal = ({ open, item, handleClose, handleDelete }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth="true"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Shopping cart
      </DialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  textTransform: "uppercase",
                  backgroundColor: "#e2e2e2",
                  fontWeight: "bold",
                }}
              >
                <TableCell align="center">id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="center">About</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.map((ele) => {
                return (
                  <TableRow>
                    <TableCell align="center">{ele.id}</TableCell>
                    <TableCell align="center">{ele.name}</TableCell>
                    <TableCell align="center">{ele.price}</TableCell>
                    <TableCell align="center">{ele.qty}</TableCell>
                    <TableCell align="center">{ele.about}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => handleDelete(ele.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
