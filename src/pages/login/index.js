import React from "react";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useContext } from "react";
import { AuthContext } from "../../components/context/AuthProvider";
import { LoginForm } from "../../components/form/LoginForm";



function Login() {
  const { token } = useContext(AuthContext);



  return (

    <Container color={'secondary'} id='container_principal' sx={{ pt: 15 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h3" color='text.primary' gutterBottom sx={{ textAlign: 'center', pt: 1 }}>
              Login
            </Typography>
            <LoginForm />
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>

  )
}

export default Login;