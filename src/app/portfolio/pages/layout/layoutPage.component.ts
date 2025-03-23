import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
export interface PersonalInformation {
  description: string;
  name: string;
  university_title: string;
  update: string;
}
@Component({
  selector: 'portfolio-layout-page',
  templateUrl: './layoutPage.component.html',
  styleUrls: ['./layoutPage.component.css'],
})
export class LayoutPageComponent {
}
