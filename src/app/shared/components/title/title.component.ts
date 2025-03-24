import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() name: string | undefined
  @Input() university_title: string | undefined
}
