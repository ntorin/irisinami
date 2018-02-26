import React from 'react'
import glamorous from 'glamorous'

import { colors } from 'helpers/constants'

export default class Contact extends React.Component {
    render() {
        return (
            <Container>
                <div class="row">
                    <div class="col col-xs-12">
                        <ImageLink>
                            <img src="../../../assets/misc/facebook.png" class="img-fluid" width="48" height="48" alt="Facebook"/>
                        </ImageLink>
                        <ImageLink href="https://twitter.com/irisinami">
                            <img src="../../../assets/misc/twitter.png" class="img-fluid" width="48" height="48" alt="Twitter"/>
                        </ImageLink>
                        <ImageLink href="https://www.instagram.com/irisinami">
                            <img src="../../../assets/misc/instagram.png" class="img-fluid" width="48" height="48" alt="Instagram"/>
                        </ImageLink>
                        <ImageLink href="mailto:irisinami@gmail.com">
                            <img src="../../../assets/misc/mail.png" class="img-fluid" width="48" height="48" alt="Email"/>
                        </ImageLink>
                    </div>
                </div>
                <Email>
                    irisinami@gmail.com
                </Email>
            </Container>
        )
    }
}

const Container = glamorous.div({
    backgroundColor: colors.black,
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    padding: '20px'
});

const ImageLink = glamorous.a({
    padding: '20px'
});

const Email = glamorous.div({
    padding: '20px'
});