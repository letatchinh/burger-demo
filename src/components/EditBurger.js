import { Stack } from '@mui/material'
import React from 'react'
import ItemEditBurger from './ItemEditBurger'

export default function EditBurger() {
  return (
    <Stack border='1px solid #1976D2' borderRadius='20px' padding='10px' spacing={1}> 
    <ItemEditBurger name='salad' price={0.5}/>
    <ItemEditBurger name='bacon' price={0.2}/>
    <ItemEditBurger name='cheese' price={0.6}/>
    <ItemEditBurger name='meat' price={0.8}/>
    </Stack>
  )
}
