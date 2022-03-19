import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    email: String;
    date: String;
}

const UsereSchema: Schema = new Schema({
    email: { type: String },
    date: { type: String }
});

export const UserModel: Model<IUser> = model<IUser>('user', UsereSchema);