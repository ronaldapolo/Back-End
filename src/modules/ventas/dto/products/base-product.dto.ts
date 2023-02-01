import {
    IsString,
    Allow,
    IsBoolean,
    IsNumber,
    IsNotEmpty,
    ArrayNotEmpty,
    IsArray,
    IsPositive,
    IsInt,
  } from 'class-validator';

  import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions
  } from '@shared/validation';

  //validar los campos de la clase

  export class BaseProductDto {

    

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly title: string;

  
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber(isNumberValidationOptions())
    @IsPositive(isPositiveValidationOptions)
    readonly price: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly description: string;

    @ArrayNotEmpty(isNotEmptyValidationOptions())
    @IsArray(IsArrayValidationOptions())
    readonly images:string[];

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsInt(IsIntValidationOptions())
    @IsString(isNumberValidationOptions())
    readonly categpryId: number;




  }