export interface ICategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface IImage {
  id: string;
  url: string;
  publicId: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  status: string;
  longDescription: string;
  unit?: IProductUnit;
  images?: IImage[];
  category?: ICategory;
}

export interface IProductUnit {
  id: string;
  name: string;
}
