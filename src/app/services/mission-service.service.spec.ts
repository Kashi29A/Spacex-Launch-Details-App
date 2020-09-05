import { TestBed } from '@angular/core/testing';

import { MissionServiceService } from './mission-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Mission } from '../models/mission.model';

describe('MissionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [MissionServiceService]
  }));

  it('should be created', () => {
    const service: MissionServiceService = TestBed.get(MissionServiceService);
    expect(service).toBeTruthy();
  });

  it('should have getLaunchDetails function', ()=>{
    const service: MissionServiceService = TestBed.get(MissionServiceService);
    expect(service.getLaunchDetails).toBeTruthy();
  });

  it(' it should render 100 records when calling getLaunchDetails', ()=>{
    const service: MissionServiceService = TestBed.get(MissionServiceService);
    service.getLaunchDetails({limit: 100}).subscribe((data: Mission[])=>{
      expect(data.length).toEqual(100)
    })
   
  })
});
