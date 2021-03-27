import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserModel } from 'src/users/models/user.model';

@ObjectType()
@Schema()
export class CommentModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => UserModel)
    @Prop()
    user: UserModel;

    @Field(() => String)
    @Prop()
    text: string;
}

export type CommentDocument = CommentModel & Document;
export const CommentSchema = SchemaFactory.createForClass(CommentModel);