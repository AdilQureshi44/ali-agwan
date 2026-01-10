import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './section/hero/hero';
import { Service } from './section/service/service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Hero,Service],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
