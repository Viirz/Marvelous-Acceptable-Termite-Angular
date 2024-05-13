import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner1',
  templateUrl: 'banner1.component.html',
  styleUrls: ['banner1.component.css'],
})
export class Banner1 {
  @Input()
  content1: string = 'Company mission statement'
  @Input()
  action1: string = 'Call to Action'
  @Input()
  heading1: string = 'Company Name'
  constructor() {}
}
