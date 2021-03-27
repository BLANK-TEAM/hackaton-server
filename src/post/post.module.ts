import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './models/post.model';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }]),
    ],
    providers: [PostModel, PostResolver],
    exports: [PostService]
})
export class PostModule { }

`
mutat
`
