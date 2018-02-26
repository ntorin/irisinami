// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import glamorous from 'glamorous'

import NavigationBar from 'components/navigationbar/navigationbar'
import About from 'components/about/about'
import Products from 'components/products/products'
import Contact from 'components/contact/contact'

import { colors } from 'helpers/constants'

export default class Landing extends React.Component {
    render() {
        return (
            <Container>
                <NavigationBar/>
                <About/>
                <Products/>
                <Contact/>
            </Container>
        )
    }
}



const Container = glamorous.div({
    backgroundColor: colors.irisinami,
    color: '#FFFFF'
}, props => 'container-fluid');