import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed: boolean;
  @Output() toggleCollapsedEvent = new EventEmitter<any>();
  @Output() logoutEvent = new EventEmitter<any>();

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.toggleCollapsedEvent.emit();
  }

  onLogout(): void {
    this.logoutEvent.emit();
  }
}
