import { Component, Input } from '@angular/core'

@Component({
  selector: 'db-form-fixed',
  templateUrl: 'db-form-fixed.component.html',
  styleUrls: ['db-form-fixed.component.css'],
})
export class DBFormFixed {
  @Input()
  button15: string = '50 pohon'
  @Input()
  heading: string = 'JOIN'
  @Input()
  button: string = 'Next'
  @Input()
  textinputPlaceholder: string = 'placeholder'
  @Input()
  button13: string = '20 pohon'
  @Input()
  text: string = 'Rp 16.000 untuk tanam pohon'
  @Input()
  rootClassName: string = ''
  @Input()
  button16: string = '30 pohon'
  @Input()
  button14: string = '5 pohon'
  constructor() {}
}
