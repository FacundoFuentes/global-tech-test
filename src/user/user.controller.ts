import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  getAllUsers() {
    try {
      return this.userService.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    try {
      return this.userService.getUserById(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateUserDto>,
  ) {
    try {
      return this.userService.updateUser(id, updateData);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}
