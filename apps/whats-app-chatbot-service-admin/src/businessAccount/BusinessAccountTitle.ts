import { BusinessAccount as TBusinessAccount } from "../api/businessAccount/BusinessAccount";

export const BUSINESSACCOUNT_TITLE_FIELD = "id";

export const BusinessAccountTitle = (record: TBusinessAccount): string => {
  return record.id?.toString() || String(record.id);
};
