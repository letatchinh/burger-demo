import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react'
import { useForm } from 'react-hook-form';
import axiosClient from '../MyAxios/Axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {mutate , isLoading} = useMutation({
      mutationFn: account => {
        return axiosClient.post('api/users', account)
      },
      onSuccess : (data) => {
        if(data.data[0]){
          navigate('/')
        }
        else{
          alert("login that bai")
        }
      },
      onError : () => {
        console.log("error");
      }
      
    })
  const onSubmit = (data) =>{
    mutate(JSON.stringify({
      username : data.username,
      password : data.password
    }))
  }
  return (
    <Paper sx={{width : '40%' , margin : '50px auto' }} elevation={3}>
<form  style={{padding : '10px'}} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} alignItems='center'>
        <Typography variant='h6'>Sign In</Typography>
      <TextField error={errors && errors.username !== undefined} helperText={errors.username && "User name must be Require"} fullWidth label='Username' variant="outlined"  {...register("username",{required : true})} />
      <TextField error={errors && errors.password !== undefined} helperText={errors.password && "Password must be Require"} fullWidth label='Password' variant="outlined" {...register("password",{required : true})} />
      {errors.exampleRequired && <span>This field is required</span>}
      {isLoading ? 
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton> : <Button variant='contained' type="submit" >Login</Button>}
      <Stack direction='row' alignItems='center' spacing={1}>
          <div style={{width : '200px' , background : 'black' , height : '2px'}}></div>
          <Typography flex={1}>Or</Typography>
          <div style={{width : '200px' , background : 'black' , height : '2px'}}></div>
      </Stack>
      <Button variant='contained' >Register</Button>
      </Stack>
    </form>
    </Paper>
  )
}
