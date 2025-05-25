import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ShipmentService, ShipmentPayload } from '../shipment.service';

@Component({
  selector: 'app-shipment-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent {
  income: number | null = null;
  cost: number | null = null;
  additional_cost: number | null = null;
  @Output() shipmentSaved = new EventEmitter<void>();

  constructor(private shipmentService: ShipmentService) {}

  onSubmit() {
    if ((this.income ?? 0) < 0 || (this.cost ?? 0) < 0 || (this.additional_cost ?? 0) < 0) {
      alert('Please enter only positive numbers');
      return;
    }

    if ((this.income ?? 0) == 0) {
      alert('Please enter income');
      return;
    }
  
    const payload: ShipmentPayload = {
      income: this.income ?? 0,
      cost: this.cost ?? 0,
      additional_cost: this.additional_cost ?? 0
    };
    
    this.shipmentService.createShipment(payload).subscribe(() => {
      this.income = null;
      this.cost = null;
      this.additional_cost = null;
      this.shipmentSaved.emit();
    });
  }
}
