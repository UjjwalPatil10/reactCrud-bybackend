import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import UserContext from "./UserContext";
import axios from "axios";
import APIS from "../../api/APIS";
import UserService from "./UserService";

const UserForm = () => {
  const { operation, initialUser, handleDialogClose, loadUsers, setUsers } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm({
    defaultValues: initialUser,
  });
  const handleUser = async (user) => {
    console.log("Handle..", user);
    console.log("User ID:", initialUser);
    if (operation === "edit") {
      try {
        const response = await UserService.updateUser(initialUser?._id, user);
        // Note: Use initialUser?._id instead of undefined userId
        console.log("Res:", response?.data);
        handleDialogClose();
        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.map((u) =>
            u._id === initialUser._id ? { ...u, ...user } : u
          );
          return updatedUsers;
        });
        alert("User Updated...");
      } catch (err) {
        console.error(err);
        alert("User not Updated");
      }
    } else {
      // Existing code for creating a new user
      UserService.createUser(user)
        .then((response) => {
          handleDialogClose();
          loadUsers();
          alert("User created...");
        })
        .catch((err) => {
          console.error(err);
          alert("User not created...");
        });
    }
  };

  // const handleUser = (user) => {
  //   console.log("Handle..", user);
  //   console.log("User ID:", initialUser);
  // if (operation === "edit") {
  //   UserService.updateUser(initialUser?._id, user)
  //     .then((response) => {
  //       console.log("Res:", response?.data);
  //       handleDialogClose();
  //       setUsers((prevUsers) => {
  //         const updatedUsers = prevUsers.map((u) =>
  //           u._id === initialUser._id ? { ...u, ...user } : u
  //         );
  //         return updatedUsers;
  //       });
  //       alert("User Updated...");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert("User not Updated");
  //     });
  //   } else {
  //     // Modified code for creating a new user
  //     UserService.createUser(user)
  //       .then((response) => {
  //         handleDialogClose();
  //         loadUsers();
  //         alert("User created...");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         alert("User not created...");
  //       });
  //   }
  // };
  return (
    <Container>
      <form onSubmit={handleSubmit((data) => handleUser(data))}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              {...register("name")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mobile"
              {...register("mobile")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              label="Age"
              {...register("age")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="city"
              {...register("city")}
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" type="submit">
              {operation === "edit" ? "Update" : "Create"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
