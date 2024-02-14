import { IsBoolean, IsInt, IsString } from "class-validator";

export class CreatePostDto {

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsBoolean()
    isArchived: boolean;

    @IsInt()
    userId: number;
}
