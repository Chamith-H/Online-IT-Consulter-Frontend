import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/Requests/api.service';
import { CurrentUser } from 'src/app/Informations/CurrentUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private request: ApiService) { }

  public statusCode = {status:"", error:{type:''}}

  public expandAccount = false
  public defaultAction = true

  public view_Progress() {
    this.expandAccount = !this.expandAccount
  }

  public switchActions() {
    this.defaultAction = !this.defaultAction
  }

  public onSubmit_Login(form: NgForm) {
    this.request.login(form.value).subscribe(
      async(response:any) => {
        this.statusCode = await response
        await new CurrentUser(response.Id, response.Name, response.Email)
        console.log("User saved")
      },

      (error:any) => this.statusCode = error,
    )
  }

  public onSubmit_Register(form: NgForm) {
    this.request.register(form.value).subscribe(
      (reponse) => console.log(reponse),
      (error) => console.log(error)
    )
  }
}
