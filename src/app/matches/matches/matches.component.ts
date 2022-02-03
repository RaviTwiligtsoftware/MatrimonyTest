import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  tabType: any = 'regular';
  currentTabData: any[] = []
  allProfiles: any;
  tabs = [
    {name:'JUST JOINED', id:'justJoined'},
    {name:'MATCHES', id:'matches'},
    {name:'PREMIUM', id:'premium'},
    {name:'MUTUAL MATCHES', id:'mutual'}
  ]
  selected = 0;
  constructor(
    private service: DataService
  ) {
  }

  ngOnInit(): void {
    this.getProfileList();
  }
  switchTab(type: string) {
    this.tabType = type;
  }

  getProfileList() {
    this.service.getProfileInfo().subscribe((result: any) => {
      this.allProfiles = result.data
      this.getTabList('justJoined');
    }, err => {
      console.log('getProfileInfo', err);
    });
  }
  getTabList(tab: string) {
    this.currentTabData = this.allProfiles[tab];
  }
  tabChange(event:number){
    console.log(event)
    const currentTab = this.tabs[event].id
    this.getTabList(currentTab);
  }
}
