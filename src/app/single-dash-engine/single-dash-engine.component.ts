import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-single-dash-engine',
  templateUrl: './single-dash-engine.component.html',
  styleUrls: ['./single-dash-engine.component.css']
})
export class SingleDashEngineComponent implements OnInit {

  @Input() id = '';
  @Input() marque = '';
  @Input() modele = '';
  @Input() annee = '';
  @Input() puissance = '';
  @Input() rc = '';
  @Input() prix = '';
  @Input() etat = '';
  @Input() disponible = '';
  @Output() submitted = new EventEmitter();
  @Output() clickedEdit = new EventEmitter();
  @Output() clickedDelete = new EventEmitter();
  opened = false;
  // @ts-ignore
  @ViewChild('closeEditModal') private closeEditModal: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  openCloseMenu(): void {
    this.opened = !this.opened;
  }

  openEditModal(): void {
    this.clickedEdit.emit(this.id);
    this.openCloseMenu();
  }

  openDeleteModal(): void {
    this.clickedDelete.emit(this.id);
    this.openCloseMenu();
  }

  onCloseEditModal(e: any): void {
    this.closeEditModal.nativeElement.click();
    this.submitted.emit(true);
    // this.loadData();
  }
}
