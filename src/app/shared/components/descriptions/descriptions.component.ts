import { Component, Input } from '@angular/core';

@Component({
  selector: 'share-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.css',
})
export class DescriptionsComponent {
  @Input() description: string = ''
}
