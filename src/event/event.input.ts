import {Field, InputType } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose';
import {User} from '../users/models/user.model'
import {GraphQLScalarType} from 'graphql'

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

type DateTime = GraphQLScalarType;

@InputType()
export class CreatePostInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => EventTypes)
    type: EventTypes;

    @Field(() => [String])
    tags: string[];

    // @Field(() => )
    // organization: O

    // @Field(() => )
    // comments:

    @Field(() => [User])
    going: User[];

    @Field(() => GraphQLScalarType)
    date: DateTime;

}

@InputType()
export class ListPostInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => EventTypes, { nullable: true })
    type?: EventTypes;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    //TODO
    // @Field(() => )
    // organization?: O
    // @Field(() => )
    // comments?:

    @Field(() => [User], { nullable: true })
    going?: User[];

    @Field(() => GraphQLScalarType, { nullable: true })
    date?: DateTime;

}

@InputType()
export class UpdatePostInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => EventTypes, { nullable: true })
    type?: EventTypes;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    //TODO
    // @Field(() => )
    // organization?: O
    // @Field(() => )
    // comments?:

    @Field(() => [User], { nullable: true })
    going?: User[];

    @Field(() => GraphQLScalarType, { nullable: true })
    date?: DateTime;
}

