import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateUserInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    description?: string;

    @Field(() => String)
    avatarUrl?: string;
}

@InputType()
export class ListUserInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;
    
    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    avatarUrl?: string;
}

@InputType()
export class UpdateUserInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    avatarUrl?: string;
}