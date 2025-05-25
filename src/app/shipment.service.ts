import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShipmentPayload {
  income: number;
  cost: number;
  additional_cost: number;
}

export interface ShipmentProfit {
  id: number;
  income: number;
  total_costs: number;
  profit: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createShipment(payload: ShipmentPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/shipments`, payload);
  }

  getShipmentProfits(): Observable<ShipmentProfit[]> {
    return this.http.get<ShipmentProfit[]>(`${this.baseUrl}/shipments/profits`);
  }
}
