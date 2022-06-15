import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-template',
  templateUrl: './confirm-template.dialog.html',
  styleUrls: ['./confirm-template.dialog.css']
})
export class ConfirmTemplateDialog {

  constructor(public dialog: MatDialog) { }
}
