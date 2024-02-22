import {Button, Container, Header, Image, Label, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer(function HomePage() {
    const {userStore, modalStore} = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Label color='blue'>
                    Version 0.15
                </Label>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}}/>
                    Reactivities!
                </Header>

                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to activities app:)'/>
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to activities!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button id="loginBtn" onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' inverted>
                            LogIn!
                        </Button>
                        <Button id="registerBtn" onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge' inverted>
                            Register!
                        </Button>
                    </>
                )}
            </Container>
        </Segment>
    )
})