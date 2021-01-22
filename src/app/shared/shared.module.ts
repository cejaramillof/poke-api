import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from '@shared/pipes/capitalize.pipe';



@NgModule({
  declarations: [
    CapitalizePipe
  ],
  exports: [
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
