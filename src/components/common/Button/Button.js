import React from "react";
import {Button} from "react-bootstrap";

export const MyButton = props =>{
    return (<Button variant="dark">
        {props.children}

    </Button>)
}
