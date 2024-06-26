import { Module } from "@nestjs/common";
import { BusinessAccountModuleBase } from "./base/businessAccount.module.base";
import { BusinessAccountService } from "./businessAccount.service";
import { BusinessAccountController } from "./businessAccount.controller";
import { BusinessAccountResolver } from "./businessAccount.resolver";

@Module({
  imports: [BusinessAccountModuleBase],
  controllers: [BusinessAccountController],
  providers: [BusinessAccountService, BusinessAccountResolver],
  exports: [BusinessAccountService],
})
export class BusinessAccountModule {}
