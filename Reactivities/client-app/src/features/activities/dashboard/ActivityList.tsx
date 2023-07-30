import React, { useState } from "react";
import {Button, Item, Label, Segment} from "semantic-ui-react";
import {useStore} from "../../../app/stores/store";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

export default observer (function ActivityList()
{
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore; 
    const [target, setTarget] = useState('');
    function handleActivityDelete(e: React.SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
    return(
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(act => (
                    <Item key={act.id}>
                        <Item.Content>
                            <Item.Header as='a'>{act.title}</Item.Header>
                            <Item.Meta>{act.date}</Item.Meta>
                            <Item.Description>
                                <div>{act.description}</div>
                                <div>{act.city}, {act.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button  as={Link} to={`/activities/${act.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name={act.id}
                                    onClick={(e) => handleActivityDelete(e, act.id)}
                                    loading={loading && target === act.id}
                                    floated='right' 
                                    content='DELETE' 
                                    negative/>
                                <Label basic content={act.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
)