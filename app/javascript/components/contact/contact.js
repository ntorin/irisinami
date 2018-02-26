import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

export default class Contact extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    Social Med
                </div>
                <div>
                    Email
                </div>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.irisinami,
    color: '#FFFFF'
});