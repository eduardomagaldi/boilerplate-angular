import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	const title = 'Tour of Heroes';
	const form = {};

	changeName() {
		console.log('changeName', form.name);
	}

	clickMessage = '';

	onClickMe() {
		this.clickMessage = 'You are my hero!';
	}


	modelChanged(newObj) {
	    console.log('newObj', newObj);
	}
}
