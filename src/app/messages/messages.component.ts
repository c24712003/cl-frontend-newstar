import { ConfirmTemplateDialog } from './../dialog/confirm-template/confirm-template.dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmTemplateDialog);

    dialogRef.afterClosed().subscribe(result => {
      result ? this.messageService.clear() : undefined;
    });
  }
}
