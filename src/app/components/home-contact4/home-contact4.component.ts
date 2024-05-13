import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-contact4',
  templateUrl: 'home-contact4.component.html',
  styleUrls: ['home-contact4.component.css'],
})
export class HomeContact4 {
  @Input()
  content1: string =
    'We would love to hear from you. Reach out to us for any inquiries or feedback.'
  @Input()
  content4: string = 'Facebook: @GreenQuest'
  @Input()
  email1: string = 'info@greenquest.com'
  @Input()
  address1: string = '123 Green Street, Nature City, Earth'
  @Input()
  phone1: string = '+1-123-456-7890'
  @Input()
  content3: string = 'Follow us on social media for updates and news:'
  @Input()
  content5: string = 'Instagram: @GreenQuestOfficial'
  @Input()
  content2: string =
    'For partnership opportunities, please email partnerships@greenquest.com'
  @Input()
  heading1: string = 'Get in Touch'
  constructor() {}
}
