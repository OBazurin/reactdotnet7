import {Button, Container, Header, Image, Label, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function HomePage(){
    return(
       <Segment inverted textAlign='center' vertical className='masthead'>
           <Container text>
               <Label color='blue'>
                   Version 0.12.1
               </Label>
               <Header as='h1' inverted>
                   <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}}/>
                   Reactivities!
               </Header>
               <Header as='h2' inverted content='Welcome to activities app:)'/>
               <Button as={Link} to='/activities' size='huge' inverted>
                   Take me to the App NOW!
               </Button>
           </Container>
       </Segment>
    )
}