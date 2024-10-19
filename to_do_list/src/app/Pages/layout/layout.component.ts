import { RouterOutlet } from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedUser: any;

  constructor(private _router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const localUser = localStorage.getItem('loggedUser');
      if (localUser != null) {
        this.loggedUser = JSON.parse(localUser);
      }
    }
  }

  onLogOut() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('loggedUser');
    }

    this._router.navigateByUrl('loginsignup');
  }
}
