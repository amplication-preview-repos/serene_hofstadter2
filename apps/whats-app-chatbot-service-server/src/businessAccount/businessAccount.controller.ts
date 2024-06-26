import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessAccountService } from "./businessAccount.service";
import { BusinessAccountControllerBase } from "./base/businessAccount.controller.base";

@swagger.ApiTags("businessAccounts")
@common.Controller("businessAccounts")
export class BusinessAccountController extends BusinessAccountControllerBase {
  constructor(protected readonly service: BusinessAccountService) {
    super(service);
  }
}
