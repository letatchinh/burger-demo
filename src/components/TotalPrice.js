import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function TotalPrice() {
  return (
    <Stack border='1px solid #1976D2' borderRadius='20px' padding='10px' direction='row' justifyContent='space-between'> 
    <Typography>Total</Typography>
    <Typography>5.6$</Typography>
    </Stack>
  )
}
