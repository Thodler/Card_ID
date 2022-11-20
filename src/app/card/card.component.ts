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
        next: user => {
          this.user = user
          this.calculeAge();
        },
        error: error => console.warn(error),
        complete: ()=>console.log(this.user)
      })
  }

  calculeAge(): number{
    const now = new Date();
    const birth = new Date(this.user.date_of_birth);
    const time = now.getTime() - birth.getTime()
    return time / (1000 * 3600 * 24 * 365);
  }

}
