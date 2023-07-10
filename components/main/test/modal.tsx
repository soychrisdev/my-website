'use client'

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { useEffect, useState } from "react"

export default function ModalTest() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    console.log(`se preciono el boton y el estado del boton cambio a: ${open}`)
     setOpen(!open);
    }
    useEffect( ()=> {
console.log(`EL MODAL SE ENCUENTRA: ${open}`)
    }, [open])
  

    return (
        <>

            <AlertDialog open={open}>
                <AlertDialogTrigger onClick={handleClick} >Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={ handleClick}>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    )
}

