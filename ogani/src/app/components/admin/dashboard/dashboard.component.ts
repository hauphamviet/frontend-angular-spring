import { Component } from '@angular/core';
import { faBars, faBell, faBookmark, faCartShopping, faEnvelope, faFaceLaughWink, faGear, faPaperPlane, faReceipt, faRightFromBracket, faRocket, faSearch, faTachometer, faTachometerAlt, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../_service/storage.service';
import { AuthService } from '../../../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faceLaugh = faFaceLaughWink;
  search = faSearch;
  bell = faBell;
  evelope = faEnvelope;
  tachometer = faTachometerAlt;
  bookmark = faBookmark;
  receipt = faReceipt;
  cart = faCartShopping;
  rocket = faRocket;
  userIcon = faUser;
  paperPlame = faPaperPlane;
  bars = faBars;
  gear = faGear;
  logoutIcon = faRightFromBracket;
  tag = faTag;

  constructor(private storeService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout().subscribe({
      next: res =>{
        this.storeService.clean();
        this.router.navigate(['/']);
      }
    })
  }

}

