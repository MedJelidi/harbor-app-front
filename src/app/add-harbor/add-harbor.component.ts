import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EngineService} from '../services/engine.service';

@Component({
  selector: 'app-add-harbor',
  templateUrl: './add-harbor.component.html',
  styleUrls: ['./add-harbor.component.css']
})
export class AddHarborComponent implements OnInit {

  addForm: any;
  error = '';
  loading = false;
  files: string[] = [];
  imgUrls: any[] = [];

  @Output() submitted = new EventEmitter();

  constructor(private authService: AuthService,
              private engineService: EngineService) {
  }

  get f(): any {
    return this.addForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addForm = new FormGroup({
      marque: new FormControl('', Validators.required),
      modele: new FormControl('', Validators.required),
      annee: new FormControl('', Validators.required),
      puissance: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      rc: new FormControl('', Validators.required),
      etat: new FormControl('Occasion', Validators.required),
      dispo: new FormControl('Disponible', Validators.required),
      images: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.error = '';
    this.loading = true;
    const formData = new FormData();
    formData.append('marque', this.addForm.value.marque);
    formData.append('modele', this.addForm.value.modele);
    formData.append('annee', this.addForm.value.annee);
    formData.append('puissance', this.addForm.value.puissance);
    formData.append('prix', this.addForm.value.prix);
    formData.append('reservoirCarburant', this.addForm.value.rc);
    formData.append('etat', this.addForm.value.etat);
    formData.append('disponible', String(this.addForm.value.dispo === 'Disponible'));
    for (const file of this.files) {
      formData.append('newImages', file);
    }
    this.engineService.addEngine(formData).subscribe((res) => {
      this.files = [];
      this.submitted.emit(true);
      this.initForm();
      console.log(res);
      this.loading = false;
    }, err => {
      this.error = err?.error?.message;
      this.loading = false;
    });
  }

  completeFiles(): boolean {
    return !!(this.files[0]) && !!(this.files[1]) && !!(this.files[2]);
  }

  onImageChange(e: any, i: any): void {
    if (e.target.files && e.target.files.length) {
      this.files[i] = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.imgUrls[i] = reader.result;
      };
    }
  }

  removeImg(i: number): void {
    // @ts-ignore
    this.files[i] = null;
    this.imgUrls[i] = null;
  }
}
