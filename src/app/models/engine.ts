export class Engine {

  constructor(etat: string,
              disponible: boolean,
              annee: number,
              puissance: string,
              reservoirCarburant: string,
              marque: string,
              modele: string,
              prix: string,
              images: string[],
              // tslint:disable-next-line:variable-name
              _id: string) {
    this._etat = etat;
    this._disponible = disponible;
    this._annee = annee;
    this._puissance = puissance;
    this._reservoirCarburant = reservoirCarburant;
    this._marque = marque;
    this._modele = modele;
    this._prix = prix;
    this._images = images;
    this._id = _id;
  }


  // tslint:disable-next-line:variable-name
  public _id: string;

  // tslint:disable-next-line:variable-name
  private _etat: string;

  get etat(): string {
    return this._etat;
  }

  set etat(value: string) {
    this._etat = value;
  }

  // tslint:disable-next-line:variable-name
  private _disponible: boolean;

  get disponible(): boolean {
    return this._disponible;
  }

  set disponible(value: boolean) {
    this._disponible = value;
  }

  // tslint:disable-next-line:variable-name
  private _annee: number;

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  // tslint:disable-next-line:variable-name
  private _puissance: string;

  get puissance(): string {
    return this._puissance;
  }

  set puissance(value: string) {
    this._puissance = value;
  }

  // tslint:disable-next-line:variable-name
  private _reservoirCarburant: string;

  get reservoirCarburant(): string {
    return this._reservoirCarburant;
  }

  set reservoirCarburant(value: string) {
    this._reservoirCarburant = value;
  }

  // tslint:disable-next-line:variable-name
  private _marque: string;

  get marque(): string {
    return this._marque;
  }

  set marque(value: string) {
    this._marque = value;
  }

  // tslint:disable-next-line:variable-name
  private _modele: string;

  get modele(): string {
    return this._modele;
  }

  set modele(value: string) {
    this._modele = value;
  }

  // tslint:disable-next-line:variable-name
  private _prix: string;

  get prix(): string {
    return this._prix;
  }

  set prix(value: string) {
    this._prix = value;
  }

  // tslint:disable-next-line:variable-name
  private _images: string[];

  get images(): string[] {
    return this._images;
  }

  set images(value: string[]) {
    this._images = value;
  }
}
