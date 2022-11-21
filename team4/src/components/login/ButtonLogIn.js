import React from 'react';
import { Button } from 'react-bootstrap';
import { logInWithEmail } from '../../functions/firebaseActions';

export default function ButtonLogIn(){
    const goPage = async (e) => {
        e.preventDefault()
        
        //Borrar en la app final

        await logInWithEmail('team4@test.com', '123456')
       
    }

    return(
        <Button variant="danger" onClick={(e)=> {goPage(e)}}>
            Iniciar sesión
        </Button>
    )
};