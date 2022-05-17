import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
