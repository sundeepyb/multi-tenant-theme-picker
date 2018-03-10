import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme/theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ThemeService]
})
export class SharedModule { }
