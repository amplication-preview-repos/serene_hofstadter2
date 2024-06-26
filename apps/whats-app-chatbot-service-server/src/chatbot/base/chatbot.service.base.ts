/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Chatbot as PrismaChatbot } from "@prisma/client";

export class ChatbotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChatbotCountArgs, "select">): Promise<number> {
    return this.prisma.chatbot.count(args);
  }

  async chatbots(args: Prisma.ChatbotFindManyArgs): Promise<PrismaChatbot[]> {
    return this.prisma.chatbot.findMany(args);
  }
  async chatbot(
    args: Prisma.ChatbotFindUniqueArgs
  ): Promise<PrismaChatbot | null> {
    return this.prisma.chatbot.findUnique(args);
  }
  async createChatbot(args: Prisma.ChatbotCreateArgs): Promise<PrismaChatbot> {
    return this.prisma.chatbot.create(args);
  }
  async updateChatbot(args: Prisma.ChatbotUpdateArgs): Promise<PrismaChatbot> {
    return this.prisma.chatbot.update(args);
  }
  async deleteChatbot(args: Prisma.ChatbotDeleteArgs): Promise<PrismaChatbot> {
    return this.prisma.chatbot.delete(args);
  }
}
