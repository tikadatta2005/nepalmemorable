"use client"
import Image from 'next/image'
import React from 'react'

const CsrImage = (props) => {
  console.log(props?.src)
  return (
    <Image {...props}/>
  )
}

export default CsrImage