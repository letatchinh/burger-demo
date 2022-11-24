import { Button, Stack } from '@mui/material'
import React from 'react'
import Burger from '../components/Burger'
import EditBurger from '../components/EditBurger'
import TotalPrice from '../components/TotalPrice'

export default function HomePage() {
    
  return (
    
        <div style={{padding : '50px 0'}}>
        <Stack spacing={2} width='400px' margin = '0 auto'>
        <Burger />
        <TotalPrice />
        <EditBurger />
        <Button variant='outlined'>Check Out</Button>
        </Stack>
        </div>
    
  )
}
