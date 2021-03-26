import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { User } from './models/user.model';
import { CreateUserInput, ListUserInput, UpdateUserInput } from './user.inputs';
import { UsersService } from './users.service'; 

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => User)
    async user(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.getById(_id);
    }

    @Query(() => [User])
    async users(
        @Args('filters', { nullable: true }) filters?: ListUserInput,
    ) {
        return this.usersService.list(filters);
    }

    @Mutation(() => User)
    async createUser(@Args('payload') payload: CreateUserInput) {
        return this.usersService.createUser(payload);
    }

    @Mutation(() => User)
    async updateUser(@Args('payload') payload: UpdateUserInput) {
        return this.usersService.updateUser(payload);
    }

    @Mutation(() => User)
    async deleteUser(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.deleteUser(_id);
    }
}
