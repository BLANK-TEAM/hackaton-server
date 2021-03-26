import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {DateTime, EventTypes} from '../event.input'
import {GraphQLScalarType} from 'graphql'
import {UserModel} from '../../users/models/user.model'
import {OrganizationModel} from '../../organization/models/organization.model'

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

    @Field(() => EventTypes)
    @Prop()
    type: EventTypes;

    @Field(() => String)
    @Prop()
    address: string;

    @Field(() => [String])
    @Prop()
    tags: string[];

    @Field(() => OrganizationModel)
    @Prop()
    organization: OrganizationModel

    //TODO
    // @Field(() => )
    // comments:

    @Field(() => [UserModel])
    @Prop()
    going: UserModel[];

    @Field(() => GraphQLScalarType)
    @Prop()
    date: DateTime;

}

export type EventDocument = EventModel & Document;
export const EventSchema = SchemaFactory.createForClass(EventModel);