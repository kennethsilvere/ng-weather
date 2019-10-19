import { Action } from '@ngrx/store';
import { ZipCodeActionTypes, ZipCodeAction } from '../actions/zip-code.actions';

export interface ZipcodeState {
  zipcodes: string[];
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipCodeAction): ZipcodeState {
  switch (action.type) {

    case ZipCodeActionTypes.AddZipcode:
      return { ...state, zipcodes: [...state.zipcodes, action.payload] };


    case ZipCodeActionTypes.RemoveZipcode:
      return { ...state, zipcodes: state.zipcodes.filter(item => item !== action.payload) };

    default:
      return state;
  }
}
