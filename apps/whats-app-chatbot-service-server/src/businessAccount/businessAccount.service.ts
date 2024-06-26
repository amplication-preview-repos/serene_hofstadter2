import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessAccountServiceBase } from "./base/businessAccount.service.base";

@Injectable()
export class BusinessAccountService extends BusinessAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
