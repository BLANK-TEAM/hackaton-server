

// type Organization {
//     id: ID!
//     name: String
//     description: String
//     events: [Event]
//     posts: [Post]
//     comments: [Comment] #comments about this organization
// }

import {Field, InputType} from '@nestjs/graphql';
import {EventModel} from '../event/models/event.model';
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateOrgInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => [EventModel])
    events: EventModel[];

    //TODO
    // @Field(() => Post);
    //@Field(() => comments);
}

@InputType()
export class ListOrgInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [EventModel], { nullable: true })
    events?: EventModel[];

    //TODO
    // @Field(() => Post, { nullable: true });
    //@Field(() => comments, { nullable: true });
}

@InputType()
export class UpdateOrgInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [EventModel], { nullable: true })
    events?: EventModel[];

    //TODO
    // @Field(() => Post, { nullable: true });
    //@Field(() => comments, { nullable: true });
}