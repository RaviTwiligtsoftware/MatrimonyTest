import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
    { name: 'JUST JOINED', id: 'justJoined' },
    { name: 'MATCHES', id: 'matches' },
    { name: 'PREMIUM', id: 'premium' },
    { name: 'MUTUAL MATCHES', id: 'mutual' }
  ]
  selected = 0;
  footerHide!: boolean;

  constructor(
    private service: DataService, private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.getProfileList();
  }
  switchTab(type: string) {
    this.tabType = type;
  }

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scrollTop(event: any) {
   const scrollBar = event.scrollingElement.scrollTop;
   if(scrollBar > 200) {
     this.footerHide = true;
1   } else {
     this.footerHide = false;
   }

  }

  getProfileList() {
    this.spinner.show();
    this.service.getProfileInfo().subscribe((result: any) => {
      this.spinner.hide();
      this.allProfiles = result.data
      this.getTabList('justJoined');
    }, err => {
      this.spinner.hide();
      console.log('getProfileInfo', err);
    });
  }
  getTabList(tab: string) {
    this.currentTabData = this.allProfiles[tab];
  }
  tabChange(event: number) {
    this.spinner.show();
    setTimeout(() => {
      const currentTab = this.tabs[event].id
      this.getTabList(currentTab);
      this.spinner.hide();
    }, 1000)
  }
}
