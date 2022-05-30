import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

/*  logout(){
    this._router.navigate(['/exit'])
  }*/

}
