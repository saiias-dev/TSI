import React, { ReactNode } from "react";
import { Component } from "react";
import {Container} from "../components/Container"
import {Input} from "../components/Input"   

export default class About extends Component {
    render() : ReactNode {
        return (
            <Container>
            <div className="flex gap-6 mb-6 md:grid-cols-2">
                <Input color='primary' size='large' title='' onChange={function (value: string): void {
                        throw new Error("Function not implemented.");
                    } }/>
                <Input color='secondary' size='large' title='' onChange={function (value: string): void {
                        throw new Error("Function not implemented.");
                    } }/>
                <Input color='third' size='large' title='' onChange={function (value: string): void {
                        throw new Error("Function not implemented.");
                    } }/>
                <Input color='fourth' size='large' title='' onChange={function (value: string): void {
                        throw new Error("Function not implemented.");
                    } }/>
            </div> 
            </Container>
        );
    }
}

