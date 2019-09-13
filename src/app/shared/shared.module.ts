import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const EXPORTS = [CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [...EXPORTS],
  exports: [...EXPORTS]
})
export class SharedModule {}
