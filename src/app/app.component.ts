import { Component, ViewChild } from '@angular/core';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { ShipmentTableComponent } from './shipment-table/shipment-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShipmentFormComponent, ShipmentTableComponent, MatCardModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(ShipmentTableComponent) table!: ShipmentTableComponent;

  onShipmentSaved() {
    this.table.refresh();
  }
}
