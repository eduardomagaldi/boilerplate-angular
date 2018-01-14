import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// import {Component, ViewChild} from 'angular2/core';
// ...

// ...


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
	form = {};

	@ViewChild('myForm') myForm;

	changeName() {
		console.log('changeName', form.name);
	}

	clickMessage = '';

	onClickMe() {
		this.clickMessage = 'You are my hero!';
	}

	onSubmit() {
		// console.log('onSubmit', myForm.form.valid);
		this.showForm();
	}

	showForm() {
	    console.log(this);
	}

	modelChanged(newObj) {
	    console.log('newObj', newObj);
	}
}
