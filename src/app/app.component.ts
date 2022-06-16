import { ConfirmTemplateDialog } from './dialog/confirm-template/confirm-template.dialog';
import { MessageService } from './message.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Careline - Tour of Heroes';
  heroes: Hero[] = [];

  constructor(public messageService: MessageService, private heroService: HeroService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.heroService.heroes$.subscribe(next => {
      this.heroes = next;
    });
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
