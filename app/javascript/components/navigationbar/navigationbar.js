import React from 'react'
import glamorous from 'glamorous'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Container class="navbar navbar-expand-sm navbar-fixed-top">
                <a class="navbar-brand" href="#">Iris Inami</a>
                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#products-citrume">Citru.me</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Blog</a>
                        </li>
                    </ul>
                </div>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.irisinami,
    color: '#FFFFF'
});