import { tap, map, take } from 'rxjs/operators';
import { DashboardLink } from './models/dashboard-link';
import { ConfirmTemplateDialog } from './dialog/confirm-template/confirm-template.dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardLinkService, HeroService, MessageService } from './services/index';
import { Hero } from './models/hero';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Careline - Tour of Heroes';
  heroes: Hero[] = [];
  hero_sub: Subscription;
  dashboard_sub: Subscription;
  dashboard_link: DashboardLink;

  constructor(public messageService: MessageService, private heroService: HeroService, private dashboardService: DashboardLinkService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.hero_sub = this.heroService.heroes$.subscribe(next => {
      this.heroes = next;
    });

    this.dashboard_sub = this.dashboardService.getDashboard().subscribe((dashboard_link: DashboardLink) => this.dashboard_link = dashboard_link);
  }

  ngOnDestroy(): void {
    this.hero_sub.unsubscribe();
  }

  clearTopFourMsg() {
    const dialogRef = this.dialog.open(ConfirmTemplateDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let length = this.messageService.messages.length;

        if (length <= 5) {
          this.messageService.clear();
        } else {
          this.messageService.messages.splice(0, 5);
          this.messageService.messages;
        }
      }
    });
  }
}
