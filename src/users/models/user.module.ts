import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';

import { User, UserSchema } from './user.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [UsersService, UsersResolver],
    exports: [UsersService]
})
export class UserModule {}