import { BusinessAccountWhereInput } from "./BusinessAccountWhereInput";
import { BusinessAccountOrderByInput } from "./BusinessAccountOrderByInput";

export type BusinessAccountFindManyArgs = {
  where?: BusinessAccountWhereInput;
  orderBy?: Array<BusinessAccountOrderByInput>;
  skip?: number;
  take?: number;
};
