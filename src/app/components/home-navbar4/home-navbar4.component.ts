import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-navbar4',
  templateUrl: 'home-navbar4.component.html',
  styleUrls: ['home-navbar4.component.css'],
})
export class HomeNavbar4 {
  @Input()
  action2: string = 'Learn More'
  @Input()
  link1: string = 'Home'
  @Input()
  action1: string = 'Join the Quest'
  @Input()
  link5: string = 'Links'
  @Input()
  link3: string = 'Projects'
  @Input()
  link2: string = 'About'
  @Input()
  logoAlt: string = 'GreenQuest logo'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  link4: string = "FAQ's"
  constructor() {}
}
