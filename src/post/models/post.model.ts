import {Field} from '@nestjs/graphql';
import {Prop, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {CommentModel} from '../../comments/models/comment.model';

export class PostModel {

    @Field(() => String)
    @Prop()
    title?: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => [CommentModel])
    @Prop()
    comments: CommentModel[];
}

export type PostDocument = PostModel & Document;
export const OrgSchema = SchemaFactory.createForClass(PostModel);