export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Id {
  name: string;
  value: string;
}

export interface Contact {
  id: Id;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
  gender: string;
}

export interface ContactResults {
  results: Contact[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
