import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User>;
  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }
  login() {
    this.accountService.login(this.model).subscribe((response) => {
      debugger;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  logout(): void {
    this.accountService.logout();
  }
}
