import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../users/userSlice";
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TextField from '@mui/material/TextField';
import "./index.css";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userData);
  const [open, setOpen] = React.useState(false);
  const [ModelData, setModelData] = React.useState();

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  const UserModel = (user) => {
    setOpen(true);
    setModelData(user);
    console.log(user.id);
  }
  const handleClose = () => setOpen(false);
  return (
    <div className="users">
      {/* {console.log(userDetails)}
      <p>hai</p>
      
      {userDetails?.users?.map((user) => (
        <div className="user">{user?.firstName}</div>
      ))} */}
      <div className="UserTable">
        <TableContainer >
          <Table size="small" aria-label="a dense table" border="1px solid black">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userDetails?.users?.map((user) => (
                <TableRow key={user?.id}>
                  <TableCell component="th" scope="row">{user?.id}</TableCell>
                  <TableCell>{user?.firstName}</TableCell>
                  <TableCell>{user?.lastName}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.phone}</TableCell>
                  <TableCell>{user?.gender}</TableCell>
                  <TableCell><Button variant="contained" onClick={() => { UserModel(user) }}>User Details</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div className="ModelStyle">
              <div id="modal-modal-title">
                <div style={{ display: "inline-block" }}>
                  <h3>User Details</h3>
                </div>
                <div style={{ display: "inline-block", float: "right" }}>
                  <CloseOutlinedIcon style={{ cursor: "pointer" }} onClick={() => { handleClose() }} />
                </div>
              </div>
              <div id="modal-modal-description">
                <div>
                  <TextField
                    id="outlined-helperText"
                    label="User Id"
                    defaultValue={ModelData?.id}
                  // helperText="Some important text"
                  />

                  <TextField
                    id="outlined-helperText"
                    label="User Name"
                    defaultValue={ModelData?.username}
                  // helperText="Some important text"
                  />

                  <TextField
                    id="outlined-helperText"
                    label="First Name"
                    defaultValue={ModelData?.firstName}
                  // helperText="Some important text"
                  />

                  <TextField
                    id="outlined-helperText"
                    label="Middle Name"
                    defaultValue={ModelData?.maidenName}
                  // helperText="Some important text"
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Last Name"
                    defaultValue={ModelData?.lastName}
                  // helperText="Some important text"
                  />
                </div>

                <p></p>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default UserDetailsPage;
