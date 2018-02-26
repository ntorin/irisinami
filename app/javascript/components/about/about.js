import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

export default class About extends React.Component {
    render() {
        return (
            <Container>
                <img src="../../../assets/irisinami/logo.png" class="img-fluid" alt="Iris Inami"/>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.irisinami,
    backgroundImage: 'url("../../../assets/misc/bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
});

const Slogan = glamorous.h1({
    color: colors.white
});

const Mission = glamorous.p({
    color: colors.white
});