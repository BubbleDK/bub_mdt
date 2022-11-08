export type Profile = {
  firstName: string;
  lastName: string;
  gender?: string;
  birthDate?: string;
  job: string;
  phone_number: string;
  image?: string;
  stateId: string;
}

export type Incidents = {
  id: string,
  title: string,
}