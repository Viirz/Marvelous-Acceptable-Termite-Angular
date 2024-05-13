import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-faq1',
  templateUrl: 'home-faq1.component.html',
  styleUrls: ['home-faq1.component.css'],
})
export class HomeFAQ1 {
  @Input()
  faq1Answer: string =
    "GreenQuest's mission is to promote environmental sustainability through tree planting and conservation efforts."
  @Input()
  faq2Answer: string =
    'You can get involved with GreenQuest by volunteering for tree planting events, donating to support our projects, or spreading awareness about our mission.'
  @Input()
  faq4Question: string =
    'How does GreenQuest ensure the sustainability of its projects?'
  @Input()
  faq5Question: string = 'Is my donation tax-deductible?'
  @Input()
  heading1: string = 'FAQs'
  @Input()
  faq3Question: string = 'Where does GreenQuest plant trees?'
  @Input()
  action1: string = 'Contact'
  @Input()
  heading2: string = 'Still have a question?'
  @Input()
  faq2Question: string = 'How can I get involved with GreenQuest?'
  @Input()
  faq1Question: string = "What is GreenQuest's mission?"
  @Input()
  faq5Answer: string =
    'Yes, donations made to GreenQuest are tax-deductible to the extent allowed by law. Please consult with your tax advisor for more information.'
  @Input()
  faq4Answer: string =
    'GreenQuest works closely with local communities and environmental experts to ensure that tree planting projects are sustainable and have a positive long-term impact.'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  faq3Answer: string =
    'GreenQuest plants trees in various locations around the world, focusing on areas that are in need of reforestation and conservation.'
  constructor() {}
}
