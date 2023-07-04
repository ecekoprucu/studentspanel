type Company = {
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  department: string;
  name: string;
  title: string;
};

export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  email: string;
  phone: string;
  company: Company;
  domain: string;
  image: string;
};
