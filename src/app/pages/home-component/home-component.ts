import { Component } from '@angular/core';
import { Hero } from '../../section/hero/hero';
import { About } from '../../section/about/about';
import { Contact } from '../../section/contact/contact';
import { Service } from '../../section/service/service';
import { Testimonals } from '../../section/testimonals/testimonals';

@Component({
  selector: 'app-home-component',
  imports: [Hero, About,Contact,Service,Testimonals,],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
