import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-cta1',
  templateUrl: 'home-cta1.component.html',
  styleUrls: ['home-cta1.component.css'],
})
export class HomeCTA1 {
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  action1: string = 'Main action'
  @Input()
  action2: string = 'Secondary action'
  @Input()
  heading1: string =
    'Call to action that excites the visitor to try your product'
  constructor() {}
}
