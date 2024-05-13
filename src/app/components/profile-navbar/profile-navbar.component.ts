import { Component, Input } from '@angular/core'

@Component({
  selector: 'profile-navbar',
  templateUrl: 'profile-navbar.component.html',
  styleUrls: ['profile-navbar.component.css'],
})
export class ProfileNavbar {
  @Input()
  imageAlt3: string = 'image'
  @Input()
  imageSrc3: string = '/assets/gq%20(1)-200h.webp'
  @Input()
  action1: string = 'Join the Quest'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  logoAlt: string = 'GreenQuest logo'
  @Input()
  link4: string = "FAQ's"
  @Input()
  link3: string = 'Projects'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  imageAlt2: string = 'image'
  @Input()
  link2: string = 'About'
  @Input()
  imageAlt: string = 'image'
  @Input()
  link1: string = 'Home'
  @Input()
  imageSrc1: string = '5c25fd75-e002-4400-84e3-47e00975bc8d'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc: string = '9268e12d-5ab8-4f03-8a35-fffe79be2393'
  @Input()
  action2: string = 'Back To Home'
  @Input()
  link5: string = 'Links'
  @Input()
  imageSrc2: string = '5c25fd75-e002-4400-84e3-47e00975bc8d'
  constructor() {}
}
