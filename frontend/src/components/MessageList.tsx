import React, { useState } from 'react'
import { gql } from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/client';
import { Message } from '../interfaces/message';
import MessageItem from './MessageItem';

const GET_MESSAGES = gql`
{
    messages {
    _id
    title
    content
    author
    }
}`;

const DELETE_MESSAGE = gql`
mutation DeleteMessage ($id:String!) {
    deleteMessage(id: $id) {
        _id
    }
}`;
export function MessageList() {

    const { loading, error, data } = useQuery(GET_MESSAGES);

    const [deleteMessage] = useMutation(DELETE_MESSAGE)

    if(loading){
        return <p>Loading...</p>
    } else if (error) {
        return <p>Error</p>
    }

    const deleteEvent = async (id: string) => {
        await deleteMessage({variables: {id}});
    }

    return (
        <div className="">
            <div className="d-flex justify-content-space-between flex-wrap">
                {
                    data.messages.map((element: Message) => {
                        return <MessageItem deleteEvent={deleteEvent} message={element}></MessageItem>
                    })
                }
            </div>
        </div>
    )
}


export default MessageList
