import { Message } from '../interface/message';
import messageModel from '../model/message.model';

export const resolver = {
    ping: () => "pong",
    messages: async () => {
        const messages: Message[] = await messageModel.find();
        return messages;
    },
    message: ({ id }: any) => {
        const message = messageModel.findById(id);
        return message;
    },
    createMessage: async ({ input }: any) => {
        const newMessage: Message = input;
        const message = await messageModel.create(newMessage);
        return message;
    },
    updateMessage: async ({id, input}: any) => {
        const newData: Message = input;
        const message = await messageModel.findByIdAndUpdate(id, newData, {new: true});
        return message;
    },
    deleteMessage: async ({id}: any) => {
        const message = await messageModel.findByIdAndRemove(id);
        return message;
    },
    deleteMessages: async () => {
        await messageModel.deleteMany({});
        return "All items have been deleted";
    }
}