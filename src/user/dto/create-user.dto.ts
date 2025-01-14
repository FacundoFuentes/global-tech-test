import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

class ProfileDto {
  @ApiProperty({
    description: 'The ID of the profile',
    example: '12345',
  })
  id: string;

  @ApiProperty({
    description: 'The code of the profile',
    example: 'PROF123',
  })
  code: string;

  @ApiProperty({
    description: 'The name of the profile',
    example: 'Admin',
  })
  profileName: string;
}

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The age of the user',
    example: 30,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    description: 'The profile of the user',
    type: () => ProfileDto, // Usa un DTO anidado para el objeto "profile"
  })
  @IsNotEmpty()
  profile: ProfileDto;
}
