import React from 'react'
import { Message } from '../interfaces/message'

interface Props {
    message: Message,
    deleteEvent: (args: any) => void;
}

function MessageItem(props: Props) {

    const deleteItem = () => {
        props.deleteEvent(props.message._id as string);
    }

    return (
        <div className="card m-1">
            <div className="card-body row">
                <div className="col-md">
                    <h5>{props.message.title}</h5>
                    <h6>{props.message.author}</h6>
                </div>
                <div className="col-md btn-group">
                    <button className="btn btn-danger btn-sm" onClick={deleteItem}><span className="fa fa-trash"></span></button>
                    <button className="btn btn-warning btn-sm"><span className="fa fa-edit"></span></button>
                </div>
            </div>
        </div>
    )
}

export default MessageItem
