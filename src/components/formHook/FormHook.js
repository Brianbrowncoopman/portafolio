import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/ThemeConfig';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const FormHook = () => {

  const [datos, setDatos] = useState([])
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    setDatos([
      ...datos,
      data
    ])
    e.target.reset();
  }
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField onSubmit={handleSubmit}
              id="outlined-helperText"
              label="Nombre"
              name='nombre'
              {...register('nombre', { required: { value: true, message: 'El nombre es obligatorio' }, minLength: { value: 3, message: 'Ingrese mínimo 3  letras' } })}
            />
            <h2 style={{ color: 'red' }}> {errors?.nombre?.message}</h2>
            <TextField
              id="outlined-helperText"
              label="Apellido"
              name='apellido'
              {...register('apellido', { required: { value: true, message: 'El apellido es obligatorio' }, minLength: { value: 3, message: 'Ingrese mínimo 3 letras' } })}
            />
            <TextField
              id="outlined-helperText"
              label="Email"
              name='Email'
              {...register('apellido', { required: { value: true, message: 'El Email es obligatorio' }, minLength: { value: 3, message: 'Ingrese mínimo 3 letras' } })}
            />
            <span>
              <h2 style={{ color: 'red' }}> {errors?.apellido?.message}</h2>
            </span>

            <Button type='submit' variant="contained" color='primary' endIcon={<SendIcon />}>
              Enviar
            </Button>

            <div>
              {
                datos.map((item, index) =>
                  <h3 key={index}>
                    Bienvenido! {item.nombre} {item.apellido}
                  </h3>
                )
              }
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </Fragment>


  );


}


export default FormHook;