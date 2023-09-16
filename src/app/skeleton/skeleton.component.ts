import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-skeleton',
	standalone: true,
	imports: [CommonModule],
	template: `
		<ng-content></ng-content>
		<span class="sr-only">Loading...</span>
	`,
})
export class SkeletonComponent {
	@HostBinding('role') role = 'status';
}
