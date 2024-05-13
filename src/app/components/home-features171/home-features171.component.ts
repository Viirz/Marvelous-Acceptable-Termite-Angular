import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-features171',
  templateUrl: 'home-features171.component.html',
  styleUrls: ['home-features171.component.css'],
})
export class HomeFeatures171 {
  @Input()
  feature1Slogan: string = 'Protecting the Environment'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImageAlt: string = 'Image of sustainable practices'
  @Input()
  feature1Title: string = 'Sustainable Practices'
  @Input()
  feature1Description: string =
    'Learn about our sustainable practices that help protect the environment and promote a greener future.'
  constructor() {}
}
