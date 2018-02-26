import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

export default class About extends React.Component {
    render() {
        return (
            <Container>
                IrisInami
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.irisinami,
    color: '#FFFFF'
});