import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'


export default class Button extends React.Component {
    render() {
        return (
            <Btn>{this.props.text}</Btn>
        )
    }
}

const Btn = glamorous.button({
    padding: '14px 24px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    background: 'none',
    borderColor: colors.white,

    color: colors.white,
    borderRadius: '20px'
}, props => 'btn btn-outline');