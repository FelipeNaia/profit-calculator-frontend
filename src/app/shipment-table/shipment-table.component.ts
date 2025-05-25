import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ShipmentService, ShipmentProfit } from '../shipment.service';

@Component({
  selector: 'app-shipment-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './shipment-table.component.html',
  styleUrls: ['./shipment-table.component.scss']
})
export class ShipmentTableComponent {
  displayedColumns: string[] = ['id', 'income', 'total_costs', 'profit'];
  dataSource: ShipmentProfit[] = [];

  constructor(private cdr: ChangeDetectorRef,
    private shipmentService: ShipmentService) {
    this.refresh();
  }

  refresh() {
    this.shipmentService.getShipmentProfits().subscribe(data => {
      this.dataSource = data;
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 0);
    });
  }
}
