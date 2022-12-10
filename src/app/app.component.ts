import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { NavItem } from "./shared/model/nav-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crow-funding-fe';


  @ViewChild('snav') snav: MatSidenav

  menu: NavItem[] = [
    {
      displayName: 'Page 1',
      iconName: 'account_circle',
      route: 'page1'
    },
    {
      displayName: 'Page 2',
      iconName: 'account_circle',
      route: 'page2'
    },

  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  sideNavOpen: boolean = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
