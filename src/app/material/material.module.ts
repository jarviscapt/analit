import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }
