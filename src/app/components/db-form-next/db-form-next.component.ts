import { Component, Input } from '@angular/core'

@Component({
  selector: 'db-form-next',
  templateUrl: 'db-form-next.component.html',
  styleUrls: ['db-form-next.component.css'],
})
export class DBFormNext {
  @Input()
  heading: string = 'Email'
  @Input()
  heading2: string = 'Nomor Telepon'
  @Input()
  heading4: string = 'Pesan'
  @Input()
  button1: string = 'Previous'
  @Input()
  textinputPlaceholder4: string = 'placeholder'
  @Input()
  textinputPlaceholder1: string = 'placeholder'
  @Input()
  textareaPlaceholder: string = 'placeholder'
  @Input()
  button: string = 'Submit'
  @Input()
  heading3: string = 'Metode Pembayaran'
  @Input()
  textinputPlaceholder2: string = 'placeholder'
  @Input()
  heading5: string = 'DETAILS'
  @Input()
  rootClassName: string = ''
  @Input()
  textinputPlaceholder: string = 'placeholder'
  @Input()
  heading1: string = 'Name'
  constructor() {}
}
