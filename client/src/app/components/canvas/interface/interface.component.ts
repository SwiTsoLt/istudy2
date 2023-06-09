import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent {

  constructor(
    private router: Router
  ) { }

  public back(): void {
    this.router.navigate(['/room'])
  }
}
