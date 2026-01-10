import { Component } from '@angular/core';
import { Service } from '../service/service';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-hero',
  imports: [Service,About,Contact],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
