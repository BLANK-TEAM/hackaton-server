import {Field, InputType } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose';
import {UserModel} from '../users/models/user.model'
import {GraphQLScalarType} from 'graphql'
import {OrganizationModel} from '../organization/models/organization.model'
import {CommentModel} from '../comments/models/comment.model'

export enum EventTypes {
    music,
    party,
    education,
    sport,
}
/*
* id: ID!
  photoUrls: [String]
  title: String
  description: String
  type: EventTypes
  tags: [String]
  organization: Organization
  comments: [Comment]
  going: [User]
  date: DateTime
* */

export type DateTime = GraphQLScalarType;

@InputType()
export class CreateEventInput {
    @Field(() => String)
    title: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String)
    description: string;

    @Field(() => EventTypes)
    type: EventTypes;

    @Field(() => String)
    address: string;

    @Field(() => [String])
    tags: string[];

    @Field(() => OrganizationModel)
    organization: OrganizationModel

    // @Field(() => )
    // comments:

    @Field(() => [UserModel])
    going: UserModel[];

    @Field(() => GraphQLScalarType)
    date: DateTime;

}

@InputType()
export class ListEventInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => EventTypes, { nullable: true })
    type?: EventTypes;

    @Field(() => String)
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    @Field(() => OrganizationModel)
    organization?: OrganizationModel

    @Field(() => [CommentModel])
    comments?: CommentModel[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => GraphQLScalarType, { nullable: true })
    date?: DateTime;

}

@InputType()
export class UpdateEventInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => EventTypes, { nullable: true })
    type?: EventTypes;

    @Field(() => String)
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    @Field(() => OrganizationModel)
    organization?: OrganizationModel

    @Field(() => [CommentModel])
    comments?: CommentModel[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => GraphQLScalarType, { nullable: true })
    date?: DateTime;
}

