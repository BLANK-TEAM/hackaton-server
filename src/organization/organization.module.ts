import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationModel, OrgSchema } from './models/organization.model';
import { OrganizationResolver } from './organization.resolver';
import { OrganizationService } from './organization.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OrganizationModel.name, schema: OrgSchema }]),
  ],
  providers: [OrganizationService, OrganizationResolver],
  exports: [OrganizationService]
})
export class OrganizationModule { }
