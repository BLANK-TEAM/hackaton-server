import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {EventModel, EventSchema} from './models/event.model'
import {EventService} from './event.service'
import {EventResolver} from './event.resolver'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: EventModel.name, schema: EventSchema }]),
    ],
    providers: [EventService, EventResolver],
    exports: [EventService]
})
export class EventModule {}