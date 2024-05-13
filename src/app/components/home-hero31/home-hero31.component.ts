import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-hero31',
  templateUrl: 'home-hero31.component.html',
  styleUrls: ['home-hero31.component.css'],
})
export class HomeHero31 {
  @Input()
  heading1: string = 'Menanam Harapan, Membesarkan Masa Depan'
  @Input()
  image1Alt: string = 'Hero Image'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHRyZWV8ZW58MHx8fHwxNzE0OTc1MTM5fDA&ixlib=rb-4.0.3&w=1500'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  constructor() {}
}
