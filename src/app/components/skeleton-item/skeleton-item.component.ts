import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-skeleton-item',
	standalone: true,
	imports: [CommonModule],
	template: ``,
})
export class SkeletonItemComponent {
	@HostBinding('class') classes = 'block bg-gray-200 animate-pulse';
}
