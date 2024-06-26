/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BusinessAccountWhereInput } from "./BusinessAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BusinessAccountOrderByInput } from "./BusinessAccountOrderByInput";

@ArgsType()
class BusinessAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BusinessAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BusinessAccountWhereInput, { nullable: true })
  @Type(() => BusinessAccountWhereInput)
  where?: BusinessAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [BusinessAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BusinessAccountOrderByInput], { nullable: true })
  @Type(() => BusinessAccountOrderByInput)
  orderBy?: Array<BusinessAccountOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BusinessAccountFindManyArgs as BusinessAccountFindManyArgs };
