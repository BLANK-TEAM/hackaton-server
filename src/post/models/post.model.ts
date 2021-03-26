import {Field} from '@nestjs/graphql'
import {Prop, SchemaFactory} from '@nestjs/mongoose'
import {EventModel} from '../../event/models/event.model'
import {Document} from "mongoose"
import {OrganizationModel} from '../../organization/models/organization.model'

export class PostModel {

    @Field(() => String)
    @Prop()
    title?: string;

    @Field(() => String)
    @Prop()
    description: string;

    //TODO
    //comment
}

export type PostDocument = PostModel & Document;
export const OrgSchema = SchemaFactory.createForClass(PostModel);