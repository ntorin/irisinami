import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

import Button from "components/button/button";


export default class Citrume extends React.Component {
    render() {
        return (
            <Container>
                <Title>Citru.me</Title>
                <img src="../../../assets/citrume/citrume.png" class="img-fluid" width="256" height="256" alt="Citru.me"/>
                <Description>some text</Description>
                <Button text="Subscribe"/>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.citrume,
    color: colors.white,
    textAlign: 'center',
    padding: '20px'
});

const Title = glamorous.h2({
   color: colors.white
});

const Description = glamorous.p({
   color: colors.white
});