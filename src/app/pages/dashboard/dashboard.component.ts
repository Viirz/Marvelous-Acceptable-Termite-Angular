import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class Dashboard {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Dashboard - Marvelous Acceptable Termite')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Dashboard - Marvelous Acceptable Termite',
      },
    ])
  }
}
