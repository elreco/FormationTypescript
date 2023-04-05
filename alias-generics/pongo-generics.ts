// prendre exemple sur l'api

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
}

type Campaign = {
  id: number;
  smsMessage: string;
  smsSuffix: string;
  targetedRecipientsNb: number;
  priceWithoutVat: number;
  conversionDelay: number;
  convertedCustomersNb: number;
  createdAt: string;
  sentAt: string;
  isSent: boolean;
  isStoreSenderName: boolean;
  generatedTurnover: number;
}

type Link = {
  url: string | null;
  label: string;
  active: boolean;
}

type ApiResponse<T> = {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

type ProductApiResponse = ApiResponse<Product>;
type CampaignApiResponse = ApiResponse<Campaign>;
