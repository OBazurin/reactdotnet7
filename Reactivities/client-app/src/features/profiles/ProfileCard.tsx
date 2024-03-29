import React from "react";
import { Profile } from "../../app/models/profile";
import { observer } from 'mobx-react-lite';
import { Link } from "react-router-dom";
import { Card, Image, Icon} from 'semantic-ui-react';

interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props){
    return (
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'}/>
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>Some bio will be here</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user'/> 20 followers
            </Card.Content>
        </Card>
    )
})