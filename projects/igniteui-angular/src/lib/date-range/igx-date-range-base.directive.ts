import { Directive, ElementRef, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @hidden
 */
@Directive({
    selector: '[igxDateRangeBase]'
})
export class IgxDateRangeBaseDirective {
    constructor(protected element: ElementRef, @Optional() protected ngControl: NgControl) {
        this.nativeElement.readOnly = true;
    }

    public get nativeElement(): any {
        return this.element.nativeElement;
    }

    @Input('value')
    public set value(value: string | string[]) {
        this.nativeElement.value = value;
        if (this.ngControl) {
            this.ngControl.control.setValue(this.nativeElement.value);
        }
    }

    public get value(): string | string[] {
        return this.nativeElement.value;
    }

    public setFocus(): void {
        this.nativeElement.focus();
    }
}