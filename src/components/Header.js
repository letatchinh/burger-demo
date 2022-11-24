import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{boxShadow : '0 0 5px 2px #999', padding : '10px 0'}}>
        <Container>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Link to='/'>
        <Typography>Burger Builder</Typography>
        </Link>
        <Link to='/login'>
            <Button variant='outlined'>Login</Button>
        </Link>
    </Stack>
    </Container>
    </div>
  )
}
