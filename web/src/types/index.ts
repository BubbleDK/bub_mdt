export type Profile = {
  firstName: string;
  lastName: string;
  gender?: string;
  birthDate?: string;
  job: string;
  phone_number: string;
  image?: string;
  stateId: string;
  relatedIncidents?: Incidents[];
  tags?: Tags[];
}

export type Incidents = {
  id: string;
  title: string;
}

export type Tags = {
  name: string;
  color: string;
}