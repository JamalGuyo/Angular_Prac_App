import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  users: any[];
  viewMode = 'Nairobi';

  constructor(private data: DataService) {
    this.users = data.users;
  }
}
