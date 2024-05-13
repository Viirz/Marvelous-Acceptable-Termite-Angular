import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profilecontent',
  templateUrl: 'profilecontent.component.html',
  styleUrls: ['profilecontent.component.css'],
})
export class Profilecontent {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
