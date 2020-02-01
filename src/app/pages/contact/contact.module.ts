import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
