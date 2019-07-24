import {Component, OnInit} from '@angular/core';
import {SitesService} from '../../services/sites.service';
import {SearchResult} from '../../models/search-result';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  searchResult: SearchResult;

  constructor(private sitesService: SitesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.getItems(queryParams['site_id'],
          queryParams['payment_method_id'],
          queryParams['lat'],
          queryParams['lon'],
          queryParams['radius'],
          queryParams['limit'],
          queryParams['offset'],
          queryParams['type'],
          queryParams['order']);
      }
    );
  }

  private getItems(siteId: string,
                   paymentMethodId: string,
                   lat: string,
                   lon: string,
                   radius: string,
                   limit: string,
                   offset: string,
                   type: string,
                   order: string) {
    this.sitesService.getItems(
      siteId,
      paymentMethodId,
      lat,
      lon,
      radius,
      limit,
      offset,
      type,
      order)
      .subscribe(data => {
        this.searchResult = data;

        console.warn(data);
      });
  }

}
