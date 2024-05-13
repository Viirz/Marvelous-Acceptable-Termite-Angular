import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-features18',
  templateUrl: 'home-features18.component.html',
  styleUrls: ['home-features18.component.css'],
})
export class HomeFeatures18 {
  @Input()
  feature1Slogan: string = 'Growing Together for a Greener Future'
  @Input()
  feature1ImageAlt: string = 'Image of Tree Planting'
  @Input()
  feature1Description: string =
    'Join us in our tree planting projects to help restore the environment and create a sustainable future for generations to come.'
  @Input()
  feature1Title: string = 'Tree Planting Initiatives'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
