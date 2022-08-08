
import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-display-errors',
	templateUrl: './display-errors.component.html',
	styleUrls: ['./display-errors.component.scss']
})

export class DisplayErrorComponent implements OnInit {
	@Input() displayError: boolean;
	@Input() errorMsg: string;
  constructor(
		public router: Router,

	) {
	}

	ngOnInit() { }
	actionFromPlugin(params: any) {
		switch (params.action) {
		}
	}

	// for reference
	// isFieldValid(field: string) {
  //   if (!!this.registerForm.controls[field].errors) {
  //     if (this.registerForm.controls[field].errors.required) {
  //       this.global.fieldErrorMsg = 'Field Mandatory';
  //     } else if (!!this.registerForm.controls[field].errors.maxlength) {
  //       this.global.fieldErrorMsg = 'Max length cannot be greater than ' + this.registerForm.controls[field].errors.maxlength.requiredLength;
  //     } else if (!!this.registerForm.controls[field].errors.max) {
  //       this.global.fieldErrorMsg = 'Weight cannot be greater than ' + this.registerForm.controls[field].errors.max.max;
  //     } else if (!!this.registerForm.controls[field].errors.min) {
  //       this.global.fieldErrorMsg = 'Weight cannot be less than ' + this.registerForm.controls[field].errors.min.min;
  //     } else if (!!this.registerForm.controls[field].errors.pattern) {
  //       if (this.registerForm.controls[field].errors.pattern.requiredPattern === String(/(^[0][1-9]+)|([1-9]\d*)/)) {
  //         this.global.fieldErrorMsg = 'Weight should be in numbers';
  //       } else if (this.registerForm.controls[field].errors.pattern.requiredPattern === String(/^[a-zA-Z]+$/)) {
  //         this.global.fieldErrorMsg = 'Only alphabhets are accepted';
  //       } else if (this.registerForm.controls[field].errors.pattern.requiredPattern === String(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
  //         this.global.fieldErrorMsg = 'Date should be in mm/dd/yyyy format';
  //       } else if (this.registerForm.controls[field].errors.pattern.requiredPattern === String(/^(0|[1-9]\d*)$/)) {
  //         this.global.fieldErrorMsg = 'Weight should not be in decimals';
  //       }
  //     }
  //   }
  //   return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  // }
}
