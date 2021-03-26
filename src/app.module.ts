import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_URI } from './config/config';
import { UserModule } from './users/models/user.module';
import { UsersResolver } from './users/users.resolver';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { CommentsResolver } from './comments/comments.resolver';
import { CommentsService } from './comments/comments.service';
import {EventModule} from './event/event.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
    EventModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, CommentsResolver, CommentsService],
})
export class AppModule {}
