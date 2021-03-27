import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { GraphQLEnumType, GraphQLScalarType } from 'graphql';
import { UserModel } from '../../users/models/user.model';
import { OrganizationModel } from '../../organization/models/organization.model';
import { CommentModel } from '../../comments/models/comment.model';
import { EventTypes, DateTime } from '../types';

@ObjectType()
@Schema()
export class EventModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => [String])
    @Prop()
    photoUrls: string[];

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    type: EventTypes;

    @Field(() => String)
    @Prop()
    address: string;

    @Field(() => [String])
    @Prop()
    tags: string[];

    // @Field(() => OrganizationModel)
    // @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'OrganizationModel' }])
    // organization: OrganizationModel;

    @Field(() => [CommentModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'CommentModel' }])
    comments: CommentModel[];

    @Field(() => [UserModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'UserModel' }])
    going: UserModel[];

    @Field(() => String)
    @Prop()
    date: String;

}

export type EventDocument = EventModel & Document;
export const EventSchema = SchemaFactory.createForClass(EventModel);