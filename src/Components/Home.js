import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from '../context';

export default function Home() {


  const data = useGlobalContext();


  return (
    <div>Home with {data}</div>
  )
}
