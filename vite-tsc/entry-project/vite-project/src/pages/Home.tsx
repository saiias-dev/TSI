import type { ReactNode } from 'react';
import { Component } from "react";
import {Button} from "../components/Button";
import {Container} from "../components/Container"
import {Helmet} from 'react-helmet';

export default class Home extends Component {
    render() : ReactNode {
        return (
            <Container>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Основа"></meta>
                <meta name="keywords" content="Главная"></meta>
            </Helmet>
            <div className="flex gap-4">
                <Button color="primary" size="large" title="Подтвердить"/>
                <Button color="secondary" size="large" title="Удалить"/>
            </div> 
            </Container>
        );
    }
}

