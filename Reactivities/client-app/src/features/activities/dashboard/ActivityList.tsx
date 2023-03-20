import React, { SyntheticEvent, useState} from "react";
import {Activity} from "../../../app/models/activity";
import {Button, Item, Label, Segment} from "semantic-ui-react";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}
export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props)
{
    const [target, setTarget] = useState('');
    
    function handleActivityDelete(e: React.SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(act => (
                    <Item key={act.id}>
                        <Item.Content>
                            <Item.Header as='a'>{act.title}</Item.Header>
                            <Item.Meta>{act.date}</Item.Meta>
                            <Item.Description>
                                <div>{act.description}</div>
                                <div>{act.city}, {act.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(act.id)} floated='right' content='View' color='blue'/>
                                <Button 
                                    name={act.id}
                                    onClick={(e) => handleActivityDelete(e, act.id)}
                                    loading={submitting && target === act.id}
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