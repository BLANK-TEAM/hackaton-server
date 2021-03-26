import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CommentModel } from 'src/comments/models/comment.model';
import { EventModel } from 'src/event/models/event.model';
import { PostModel } from 'src/post/models/post.model';

@ObjectType()
@Schema()
export class UserModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String, { nullable: true })
    @Prop()
    password?: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    avatarUrl: string;

    @Field(() => [EventModel])
    @Prop()
    events: [Event]

    @Field(() => [EventModel])
    @Prop()
    posts: [PostModel]

    @Field(() => [CommentModel])
    @Prop()
    comments: [CommentModel]
}

export type UserDocument = UserModel & Document;
export const UserSchema = SchemaFactory.createForClass(UserModel);