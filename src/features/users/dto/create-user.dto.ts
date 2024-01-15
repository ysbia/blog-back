import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
    
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsBoolean()
    isActive: boolean;
}
