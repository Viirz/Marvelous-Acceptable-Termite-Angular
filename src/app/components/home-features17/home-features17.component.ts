import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-features17',
  templateUrl: 'home-features17.component.html',
  styleUrls: ['home-features17.component.css'],
})
export class HomeFeatures17 {
  @Input()
  feature1Description: string =
    'Learn about our eco-friendly initiatives and how we are committed to preserving the environment for future generations.'
  @Input()
  feature1Title: string = 'Sustainable Practices'
  @Input()
  feature1ImageAlt: string = 'Image of sustainable practices'
  @Input()
  feature1Slogan: string = 'Protecting the Environment'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1590541576391-dfc42314a7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
