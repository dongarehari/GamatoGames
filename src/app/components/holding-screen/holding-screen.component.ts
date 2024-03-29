import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-holding-screen',
  templateUrl: './holding-screen.component.html',
  styleUrls: ['./holding-screen.component.scss'],
})
export class HoldingScreenComponent implements OnInit {
  seedingPending = [];
  seedingComplete = [];
  completed$ = new BehaviorSubject(false);
  selectedLanguage: string = "en";

  redirectTo: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {}

}
