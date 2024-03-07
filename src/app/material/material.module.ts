import { NgModule } from '@angular/core';

import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';


@NgModule({
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
