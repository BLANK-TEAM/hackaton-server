import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/models/user.model';

@ObjectType()
@Schema()
export class Comment {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => User)
    @Prop()
    user: User;

    @Field(() => String)
    @Prop()
    text: string;
}

export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);