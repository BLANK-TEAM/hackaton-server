import {Field} from '@nestjs/graphql'
import {EventModel} from '../../event/models/event.model'
import {ObjectType} from 'type-graphql'
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document, Schema as MongooseSchema} from 'mongoose'

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
    @Prop()
    events: EventModel[];

    //TODO
    // @Field(() => Post) @Prop()
    //@Field(() => comments) @Prop()
}

export type OrgDocument = OrganizationModel & Document;
export const OrgSchema = SchemaFactory.createForClass(OrganizationModel);