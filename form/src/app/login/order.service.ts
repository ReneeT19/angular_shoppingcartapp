import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
    constructor(private http: AuthHttp) {}

    getOrders() {
        return this.http.get('/api/orders')
            .map(response => response);
    }
}