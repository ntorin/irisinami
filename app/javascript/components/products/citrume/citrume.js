import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'


export default class Citrume extends React.Component {
    render() {
        return (
            <Container>
                Citrume
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.citrume,
    color: '#FFFFF'
});