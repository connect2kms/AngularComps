import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private elr: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.elr.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }
}
