import { ReactNode } from "react"

export const Layout = ({children}:{children: ReactNode})=> {
    console.log(children);
    return(
        <>
            This is header
            {children}
        </>
    )
}