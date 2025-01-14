// user.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { User } from '../models/user.model';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserService } from './types/user.service.interface';

@Injectable()
export class UserService implements IUserService {
  private users: User[] = [];

  createUser(createUserDto: CreateUserDto): User {
    if (this.users.some((user) => user.email === createUserDto.email)) {
      throw new BadRequestException('Email must be unique');
    }

    const newUser: User = { id: uuid(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    if (this.users.length === 0) {
      throw new NotFoundException('No users found');
    }
    return this.users;
  }

  getUserById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  updateUser(id: string, updateData: Partial<User>): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    const { id: _, ...restUpdateData } = updateData;
    //El tipo void en TypeScript representa la ausencia de tipo. Se utiliza principalmente como tipo de retorno de funciones que no devuelven un valor.
    void _;

    this.users[userIndex] = { ...this.users[userIndex], ...restUpdateData };
    return this.users[userIndex];
  }

  deleteUser(id: string): string {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    this.users.splice(userIndex, 1);
    return `User with ID ${id} has been successfully deleted.`;
  }
}
