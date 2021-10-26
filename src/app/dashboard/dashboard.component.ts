import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EngineService} from '../services/engine.service';
import {Engine} from '../models/engine';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showOptions = false;
  engines: Engine[] = [];
  // @ts-ignore
  engineToEdit: any;
  engineToDeleteID: any;
  searchBy = 'marque';
  // @ts-ignore
  @ViewChild('closeAddModal') private closeAddModal: ElementRef;

  constructor(private engineService: EngineService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  showMenu(): void {
    this.showOptions = !this.showOptions;
  }

  loadData(): void {
    this.engineService.getEngines().subscribe(data => this.engines = data);
  }

  onCloseAddModal(e: any): void {
    this.closeAddModal.nativeElement.click();
    this.loadData();
  }

  onCloseEditModal(): void {
    $('#editModal').modal('hide');
    this.loadData();
  }

  onConfirmDelete(): void {
    console.log('deletion confirmed');
    this.onCloseDeleteModal(false);
    this.engineService.deleteEngine(this.engineToDeleteID).subscribe(() => {
      this.loadData();
      this.onCloseDeleteModal(false);
    }, (err) => {
      console.log(err);
    });
  }

  onEdited($event: any): void {
    this.loadData();
  }

  openEditModal(id: any): void {
    // @ts-ignore
    this.engineToEdit = this.engines.find(e => e._id === id);
    $('#editModal').modal('show');
  }

  openDeleteModal(id: any): void {
    // @ts-ignore
    const engine = this.engines.find(e => e._id === id);
    this.engineToDeleteID = engine?._id;

    console.log(engine);
    console.log(this.engineToDeleteID);
    $('#deleteModal').modal('show');
  }

  onCloseDeleteModal(refresh: any): void {
    $('#deleteModal').modal('hide');
    if (refresh) {
      this.loadData();
    }
  }

  onSearchChange(e: any): void {
    const searchQuery = e.target.value;
    this.engineService.searchEngine(searchQuery.length === 0 ? null : searchQuery, this.searchBy)
      .subscribe(engines => this.engines = engines);
  }

  updateSearchBy(e: any): void {
    this.searchBy = e.target.value;
  }
}
