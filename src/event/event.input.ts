import { Field, InputType } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose';
import { UserModel } from '../users/models/user.model'
import { GraphQLEnumType, GraphQLScalarType } from 'graphql'
import { OrganizationModel } from '../organization/models/organization.model'
import { CommentModel } from '../comments/models/comment.model'
import { DateTime, EventTypes } from './types';

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

@InputType()
export class CreateEventInput {
    @Field(() => String)
    title: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String)
    description: string;

    @Field(() => String)
    type: EventTypes;

    @Field(() => String)
    address: string;

    @Field(() => [String])
    tags: string[];

    // @Field(() => OrganizationModel)
    // organization: OrganizationModel;

    @Field(() => [CommentModel])
    comments: CommentModel[]

    @Field(() => [UserModel])
    going: UserModel[];

    @Field(() => String)
    date: String;

}

@InputType()
export class ListEventInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String], { nullable: true })
    photoUrls?: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    type?: EventTypes;

    @Field(() => String, { nullable: true })
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    // @Field(() => OrganizationModel, { nullable: true })
    // organization?: OrganizationModel

    @Field(() => [CommentModel], { nullable: true })
    comments?: CommentModel[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => String, { nullable: true })
    date?: String;

}

@InputType()
export class UpdateEventInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String], { nullable: true })
    photoUrls?: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    type?: EventTypes;

    @Field(() => String, { nullable: true })
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    // @Field(() => OrganizationModel, { nullable: true })
    // organization?: OrganizationModel;

    @Field(() => [CommentModel], { nullable: true })
    comments?: CommentModel[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => String, { nullable: true })
    date?: String;
}

