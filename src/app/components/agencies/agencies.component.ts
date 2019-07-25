import {Component, OnInit} from '@angular/core';
import {SitesService} from '../../services/sites.service';
import {AgenciesService} from '../../services/agencies.service';
import {ActivatedRoute} from '@angular/router';
import {Agency} from '../../models/agency';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})

export class AgenciesComponent implements OnInit {

  agencies: Agency[];

  constructor(private sitesService: SitesService,
              private agenciesService: AgenciesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAgencies();
  }

  private getAgencies() {
    this.agenciesService.getAgencies()
      .subscribe(data => {
        this.agencies = data;
      });
  }

}
