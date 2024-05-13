import { Component, Input } from '@angular/core'

@Component({
  selector: 'sign-up1',
  templateUrl: 'sign-up1.component.html',
  styleUrls: ['sign-up1.component.css'],
})
export class SignUp1 {
  @Input()
  heading1: string = 'Details'
  @Input()
  action1: string = 'Sign Up Now'
  rawkre3: string = ' '
  raw6lj8: string = ' '
  constructor() {}
}
