type CompanyInfo = {
  name: string;
  profilePicture: string;
  ratings: number;
  foodType: string;
  deliveryTime: string;
  deliveryTax: number;
};

type Places = {
  id: string;
  company: CompanyInfo;
  hasPromotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type {Places};
