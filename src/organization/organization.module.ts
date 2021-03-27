import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationModel } from './models/organization.model';
import { OrganizationResolver } from './organization.resolver';
import { OrganizationService } from './organization.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OrganizationModel.name, schema: EventSchema }]),
  ],
  providers: [OrganizationService, OrganizationResolver],
  exports: [OrganizationService]
})
export class OrganizationModule { }
