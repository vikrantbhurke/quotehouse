import { EditMode } from "@/global/enums";

export type EditDTO = {
  filter?: object;
  update?: object;
  numberField?: string;
  arrayField?: string;
  element?: string;
  mode: EditMode;
};
