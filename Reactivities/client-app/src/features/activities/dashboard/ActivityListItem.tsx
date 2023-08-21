import {Button, Icon, Item, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {Activity} from "../../../app/models/activity";
import {format} from "date-fns";

interface Props {
    act: Activity
}

export default function ActivityListItem({act}: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${act.id}`}>
                                {act.title}
                            </Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {format(act.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker'/> {act.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees will be here! :)
            </Segment>
            <Segment clearing>
                <span>{act.description}</span>
                <Button 
                    as={Link} 
                    to={`/activities/${act.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>

    )
}