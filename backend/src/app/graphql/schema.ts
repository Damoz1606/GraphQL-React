import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Query {
    ping: String!
    messages: [Message]
    message(id:String): Message
}

type Mutation {
    createMessage(input: inputMessage): Message
    updateMessage(id: String!, input: inputMessage): Message
    deleteMessage(id: String!): Message
    deleteMessages: String
}

type Message {
    _id:ID
    title: String!
    content: String!
    author: String!
}

input inputMessage {
    title: String!
    content: String!
    author: String!
}

`);