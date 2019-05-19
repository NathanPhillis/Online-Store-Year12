import { Component, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Link } from './link';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
	
	//Links of the various website pages
	links=[
		new Link('HOME', '/home', 'home'),
		new Link('CATALOG', '/store', 'shoppingcart'),
		new Link('ABOUT US', '/about-us', 'info')
		];
	
	navigate(n: number): void {
	
	}
	
	//Adaptive Display Stuff
  mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	
	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private carthandler: CartService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
	
	ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
