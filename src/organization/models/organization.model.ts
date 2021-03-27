import { Field, ObjectType } from '@nestjs/graphql'
import { EventModel } from '../../event/models/event.model'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { PostModel } from '../../post/models/post.model'
import { CommentModel } from '../../comments/models/comment.model'

@ObjectType()
@Schema()
export class OrganizationModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => [EventModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'EventModel' }])
    events: EventModel[];

    @Field(() => [PostModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'PostModel' }])
    posts: PostModel[];

    @Field(() => [CommentModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'CommentModel' }])
    comments: CommentModel[];
}

export type OrgDocument = OrganizationModel & Document;
export const OrgSchema = SchemaFactory.createForClass(OrganizationModel);