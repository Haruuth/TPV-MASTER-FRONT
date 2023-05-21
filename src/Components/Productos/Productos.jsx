import React from 'react'
import { Cervezas } from '../Cervezas/Cervezas'
import { Ginebras } from '../Ginebras/Ginebras'
import { Rones } from '../Rones/Rones'
import { Whiskey } from '../Whiskey/Whiskey'
import { Vodka } from '../Vodka/Vodka'
import { Cocteles } from '../Cocteles/Cocteles'
import { Cafe } from '../Café/Cafe'
import { Refrescos } from '../Refrescos/Refrescos'

export const Productos = () => {
  return (
<>
    <div><Cervezas/></div>
    <div><Ginebras/></div>
    <div><Rones/></div>
    <div><Whiskey/></div>
    <div><Vodka/></div>
    <div><Cafe/></div>
    <div><Cocteles/></div>
    <div><Refrescos/></div>
</>

  )
}
