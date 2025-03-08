import React, { ReactNode } from "react";
import { Component } from "react";
import {Button} from "../components/Button";
import {Container} from "../components/Container"

export default class Home extends Component {
    render() : ReactNode {
        return (
            <Container>
            <div className="flex gap-4">
                <Button color="primary" size="large" title="Подтвердить"/>
                <Button color="secondary" size="large" title="Удалить"/>
            </div> 
            </Container>
        );
    }
}

