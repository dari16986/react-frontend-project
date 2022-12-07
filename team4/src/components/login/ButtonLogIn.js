import React from "react";
import { Button } from "react-bootstrap";
import './Login.css'

export default function ButtonLogIn() {
    return (
        <Button variant="danger" type="submit" className="btn-bg w-100 mb-2 btn-lg fs-6">
            Iniciar sesión
        </Button>
    );
}
