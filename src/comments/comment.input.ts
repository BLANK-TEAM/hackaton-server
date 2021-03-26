import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/models/user.model';

@InputType()
export class CreateCommentInput {
    @Field(() => User)
    user: User;

    @Field(() => String)
    text: string;
}

@InputType()
export class UpdateCommentInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => User)
    user: User;

    @Field(() => String, { nullable: true })
    text?: string;
}