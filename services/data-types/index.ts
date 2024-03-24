export interface CategoyTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoyTypes
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[]
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}
