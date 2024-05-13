import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-footer15',
  templateUrl: 'home-footer15.component.html',
  styleUrls: ['home-footer15.component.css'],
})
export class HomeFooter15 {
  @Input()
  content1: string = 'Join the Quest for a greener future'
  @Input()
  action1: string = 'Donate Now'
  @Input()
  cookiesLink: string = 'Cookies'
  @Input()
  logoAlt: string = 'GreenQuest Logo'
  @Input()
  termsLink: string = 'Terms of Use'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  content2: string = 'Connect with us on social media'
  @Input()
  privacyLink: string = 'Privacy Policy'
  @Input()
  copyright: string = '© 2023 GreenQuest. All Rights Reserved.'
  constructor() {}
}
