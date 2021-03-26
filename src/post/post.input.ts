// type Post {
//     id: ID!
//     title: String
//     description: String
//     comments: [Comment]
// }


import {Field, InputType} from '@nestjs/graphql';
import {Schema as MongooseSchema} from "mongoose"

@InputType()
export class CreatePostInput {

    @Field(() => String)
    title?: string;

    @Field(() => String)
    description: string;

    //TODO
    //comment

}

@InputType()
export class ListPostInput {
    _id?: MongooseSchema.Types.ObjectId

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description: string;

    //TODO
    //comment

}

@InputType()
export class UpdatePostInput {
    _id?: MongooseSchema.Types.ObjectId

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description: string;

    //TODO
    //comment

}
