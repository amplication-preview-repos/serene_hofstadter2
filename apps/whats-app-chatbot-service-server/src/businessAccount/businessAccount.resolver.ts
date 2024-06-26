import * as graphql from "@nestjs/graphql";
import { BusinessAccountResolverBase } from "./base/businessAccount.resolver.base";
import { BusinessAccount } from "./base/BusinessAccount";
import { BusinessAccountService } from "./businessAccount.service";

@graphql.Resolver(() => BusinessAccount)
export class BusinessAccountResolver extends BusinessAccountResolverBase {
  constructor(protected readonly service: BusinessAccountService) {
    super(service);
  }
}
