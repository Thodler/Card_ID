import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../_models/User";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  user!: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserRandom()
  }

  getUserRandom(){
    this.userService.getUser()
      .subscribe({
        next: user => this.user = user,
        error: error => console.warn(error),
        complete: ()=>console.log(this.user)
      })
  }

}
