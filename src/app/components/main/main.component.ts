import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { MissionServiceService } from '../../services/mission-service.service'
import { Mission } from '../../models/mission.model'
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  missions: Mission[];
  mission: Mission;
  launch_years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];

  constructor( private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object, private missionService: MissionServiceService) { }
  
    isServer = !isPlatformBrowser(this.platformId);
  ngOnInit() {
    if (!this.isServer) {
      this.route.queryParams.subscribe((params) => {
        this.getMissions(params);
      });
    }
  }
  getMissions(params) {
    if (Object.keys(params).length == 0) {
      params = { limit: 100 };
    }
    this.missionService.getLaunchDetails(params).subscribe((data) => {
      console.log(data);
      this.missions = data;
    })
  }
}
