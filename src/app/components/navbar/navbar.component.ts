import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  siteID = 'MLA';
  paymentMethodId = 'rapipago';
  nearTo = {
    lat: '-31.412971',
    lon: '-64.18758',
    radius: '300'
  };
  limit = '';
  offset = '';
  orderBy = {
    type: '',
    order: ''
  };
  search = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  searchForItems(): void {
    // if (this.search !== '') {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'site_id': this.siteID,
        'payment_method_id': this.paymentMethodId,
        'lat': this.nearTo.lat,
        'lon': this.nearTo.lon,
        'radius': this.nearTo.radius,
        'limit': this.limit,
        'offset': this.offset,
        'type': this.orderBy.type,
        'order': this.orderBy.order
      }
    };
    this.router.navigate(['./sites'], navigationExtras);
    // }
  }

}
