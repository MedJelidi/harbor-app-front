import {Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {EngineService} from '../services/engine.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-harbor',
  templateUrl: './edit-harbor.component.html',
  styleUrls: ['./edit-harbor.component.css']
})
export class EditHarborComponent implements OnInit, OnChanges, OnDestroy {

  @Input() marque = '';
  @Input() modele = '';
  @Input() annee = '';
  @Input() puissance = '';
  @Input() rc = '';
  @Input() prix = '';
  @Input() etat = '';
  @Input() disponible = '';
  @Input() id = '';
  @Input() images = [];
  editForm: any;
  error = '';
  loading = false;
  files: string[] = [];
  imgUrls: any[] = [];
  imgToDisplay: any[] = [];
  imgToDelete: any[] = [];

  @Output() submitted = new EventEmitter();

  constructor(private engineService: EngineService) {
  }

  get f(): any {
    return this.editForm.controls;
  }
  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('Items destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
    this.imgUrls = [...this.images];
    this.imgToDisplay = [...this.images];
  }

  ngOnInit(): void {
  }


  initForm(): void {
    this.editForm = new FormGroup({
      marque: new FormControl(this.marque, Validators.required),
      modele: new FormControl(this.modele, Validators.required),
      annee: new FormControl(this.annee, Validators.required),
      puissance: new FormControl(this.puissance, Validators.required),
      prix: new FormControl(this.prix, Validators.required),
      rc: new FormControl(this.rc, Validators.required),
      etat: new FormControl(this.etat, Validators.required),
      disponible: new FormControl(this.disponible.toString() === 'true' ? 'Disponible' : 'Non disponible', Validators.required)
    });
  }

  onSubmit(): void {
    this.error = '';
    this.loading = true;
    if (this.files.length > 0) {
      const formData = new FormData();
      formData.append('marque', this.editForm.value.marque);
      formData.append('modele', this.editForm.value.modele);
      formData.append('annee', this.editForm.value.annee);
      formData.append('puissance', this.editForm.value.puissance);
      formData.append('prix', this.editForm.value.prix);
      formData.append('reservoirCarburant', this.editForm.value.rc);
      formData.append('etat', this.editForm.value.etat);
      formData.append('imgToDelete', JSON.stringify(this.imgToDelete));
      console.log('formdata.imgToDelete:', formData.get('imgToDelete'));
      formData.append('disponible', String(this.editForm.value.disponible === 'Disponible'));
      console.log('files:', this.files);
      for (const file of this.files) {
        if (file !== null && file !== undefined) {
          formData.append('newImages', file);
        }
      }
      console.log('formdata.newImages:', formData.get('newImages'));
      formData.append('images', JSON.stringify(this.imgUrls.filter(i => i !== null)));
      console.log('formdata.images:', formData.get('images'));
      this.engineService.editEngine(formData, this.id).subscribe((res) => {
        this.files = [];
        this.submitted.emit(true);
        console.log(res);
        this.initForm();
        this.loading = false;
      }, err => {
        this.error = err?.error?.message;
        this.loading = false;
      });
    } else {
      console.log('no files');
      console.log(this.editForm.value);
      this.editForm.patchValue({
        disponible: this.editForm.value.disponible === 'Disponible'
      });
      this.engineService.editEngine(this.editForm.value, this.id).subscribe((res) => {
        this.submitted.emit(true);
        console.log(res);
        this.loading = false;
      }, err => {
        this.error = err?.error?.message;
        this.loading = false;
      });
    }
  }

  completeFiles(): boolean {
    return !!(this.imgUrls[0] || this.files[0]) && !!(this.imgUrls[1] || this.files[1]) && !!(this.imgUrls[2] || this.files[2]);
  }

  onImageChange(e: any, i: any): void {
    if (e.target.files && e.target.files.length) {
      this.files[i] = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.imgToDisplay[i] = reader.result;
        this.imgUrls[i] = null;
        console.log('imgUrls:', this.imgUrls);
        console.log('imgToDisplay:', this.imgToDisplay);
      };
    }
  }

  removeImg(i: number): void {
    console.log('img deleted:', this.imgUrls[i]);
    // @ts-ignore
    this.files[i] = null;
    if (this.imgUrls[i] !== null && this.imgUrls[i].includes('localhost')) {
      this.imgToDelete.push(this.imgUrls[i]);
    }
    this.imgUrls[i] = null;
    this.imgToDisplay[i] = null;
    console.log('imgUrls:', this.imgUrls);
    console.log('imgToDisplay:', this.imgToDisplay);
    // console.log(this.files);
  }

}
