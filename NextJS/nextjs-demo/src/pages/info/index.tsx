import React, { ReactNode } from "react"
import Error from 'next/error'

export default function InfoPage(){
    return (
        <Error statusCode={500} withDarkMode title="Error ne" />
    )
}

InfoPage.getLayout = (children: ReactNode)=> {
    return (
    <>
        This is a layout specific for this page
        {children}
        </>
    )
  }
   