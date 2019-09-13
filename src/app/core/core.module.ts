import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

const EXPORTS = [HttpClientModule, TopBarComponent];

@NgModule({
  declarations: [TopBarComponent],
  // No es necesrio exportera el CommonModule pq ya lo importa el
  // AppModule en el BrowserModule
  imports: [CommonModule],
  exports: [...EXPORTS]
})
export class CoreModule {}
