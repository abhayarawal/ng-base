import {Component, Input, Output, EventEmitter, OnInit, Injectable, Injector} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink, Router, RouteParams} from 'angular2/router';

@Injectable()
class UtilityService {
	genId(): string {
		return Math.random().toString(36).substr(2, 9);
	}
}


/* Mount Component */

@Component({
	selector: 'mount-node',
	template: `
		<h1>Hey it works!</h1>
	`,
})
export class MountNode {
}





/ * end */
