import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

import Citrume from 'components/products/citrume/citrume'

export default class Products extends React.Component {
    render() {
        return (
            <Container>
                <Citrume/>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.irisinami,
});

const Title = glamorous.h1({
   color: colors.white
});