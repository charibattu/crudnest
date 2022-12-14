import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService){}

    @Get()
    index(): Promise<Contact[]> {
      return this.contactsService.findAll();
    }   
    @Get(':id')
    findOne(@Param('id') id): Promise<any>  {
      return this.contactsService.findOne(id);
    }
    @Post('create:id')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactsService.create(contactData);
    } 
    @Patch(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    }  
}
