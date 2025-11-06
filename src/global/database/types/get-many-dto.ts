import { Order, Type, SearchMode, Size, Sort } from "@/global/enums";

export type GetManyDTO = {
  page?: number;
  search?: string;
  sort?: Sort | string;
  order?: Order;
  size?: Size;
  searchFields?: string[];
  mode?: SearchMode;
  select?: string;
  populate?: string[];
  populateSelect?: string[];
  filter?: object;
  type?: Type;
};
