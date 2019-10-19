import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipcode = '[ZipCodes] Add ZipCode',
  RemoveZipcode = '[ZipCodes] Remove Zipcode'  
}

export class AddZipcode implements Action {
  readonly type = ZipCodeActionTypes.AddZipcode;

  constructor(public payload: string) {}
}

export class RemoveZipcode implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipcode;

  constructor(public payload: string) {}
}


export type ZipCodeAction = AddZipcode | RemoveZipcode;
