import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showNotifMenu: boolean = false;
  showUserMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickUserMenu(): void{
    this.showUserMenu = !this.showUserMenu;
    this.showNotifMenu = false;
  }

  clickNotifMenu(): void{
    this.showNotifMenu = !this.showNotifMenu;
    this.showUserMenu = false;
  }

}
