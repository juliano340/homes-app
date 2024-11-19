import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header>
      <img src="/assets/logo.svg" alt="logo" class="brand-lohgo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
      
    </section>

  </main>`,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'homes';
}
