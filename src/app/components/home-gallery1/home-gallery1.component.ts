import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-gallery1',
  templateUrl: 'home-gallery1.component.html',
  styleUrls: ['home-gallery1.component.css'],
})
export class HomeGallery1 {
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1710597288405-311061f68d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Alt: string = 'Sunset over the forest'
  @Input()
  image3Alt: string = 'Lush greenery and waterfalls'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1663069406481-d0d863af964d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1624640103930-65ecbeedc7db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image2Alt: string = 'Wildlife in their natural habitat'
  @Input()
  content1: string =
    'Take a visual journey through our gallery showcasing the stunning beauty of nature and our conservation projects.'
  @Input()
  heading1: string = "Exploring Nature's Beauty"
  constructor() {}
}
