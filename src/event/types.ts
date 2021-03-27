import { GraphQLScalarType } from "graphql";

export enum EventTypes {
    music,
    party,
    education,
    sport,
}

export type DateTime = GraphQLScalarType;
