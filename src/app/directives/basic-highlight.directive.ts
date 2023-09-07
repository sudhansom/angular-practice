import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[basicHichlight]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef){}

    ngOnInit(): void {
        this.elRef.nativeElement.style.backgroundColor = 'blue';
    }

}
