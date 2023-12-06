import { Button, Input, TextField } from "@mui/material";
import React from "react";
import styles from "./login.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Login = () => {
  return (
    <div className={styles.login_component}>
      <div className={styles.login_form}>
        <h1>Sign in to Account</h1>
        <div className={styles.login_logo}>
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
        </div>

        <form>
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            multiline
            maxRows={4}
          />
        </form>
        <Button variant="contained">Login</Button>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Login;
