import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  goToForm(){
    this.route.navigate(['private/main/addColecao'])
  }

}
