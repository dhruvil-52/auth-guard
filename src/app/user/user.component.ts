import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Array<any> = [];
  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.data.subscribe((data:any) => {
      console.log(new Date().getSeconds())
      console.log(data)
      this.user = data.user;
    })
  }

}
