import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'igx-watermark',
  styleUrls: ['./watermark.component.scss'],
  templateUrl: './watermark.component.html' ,
})
export class IgxWatermarkComponent {}

@NgModule({
  declarations: [IgxWatermarkComponent],
  exports: [IgxWatermarkComponent],
  imports: [CommonModule],
})
export class IgxWatermarkModule {}
