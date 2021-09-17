import React, { FormEvent, useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client';

const POST_MESSAGE = gql`
mutation CreateMessage($title: String!, $author: String!, $content: String!) {
    createMessage(input: {
        title: $title
        author: $author
        content: $content
    }){
        _id
    }
}`;

export function MessageForm() {

    const [content, setcontent] = useState('');
    const [author, setauthor] = useState('');
    const [title, settitle] = useState('');
    const [createMessage] = useMutation(POST_MESSAGE);

    const onSave = async (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        await createMessage({variables: {title, author, content}});
        setcontent('');
        setauthor('');
        settitle('');
        window.location.href="/";
    }

    return (
        <div className="row">
            <div className="cod-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form action="" onSubmit={onSave} method="POST">
                            <div className="form-group">
                                <input type="text" name="author" id="" className="form-control"  onChange={e => setauthor(e.target.value)} placeholder="Author" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="title" id="" className="form-control" onChange={e => settitle(e.target.value)} placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <textarea rows={2} name="content" id="" className="form-control" onChange={e => setcontent(e.target.value)} placeholder="Content" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block"><span className="fa fa-save"></span> Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm

