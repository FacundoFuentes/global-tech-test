// user.service.interface.ts
import { User } from '../../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUserService {
  /**
   * Crea un nuevo usuario.
   * @param createUserDto - Los datos necesarios para crear un usuario.
   * @returns El usuario creado.
   */
  createUser(createUserDto: CreateUserDto): User;

  /**
   * Obtiene todos los usuarios.
   * @returns Un arreglo con todos los usuarios.
   */
  getAllUsers(): User[];

  /**
   * Obtiene un usuario por su ID.
   * @param id - El ID del usuario a buscar.
   * @returns El usuario encontrado.
   * @throws NotFoundException Si el usuario no existe.
   */
  getUserById(id: string): User;

  /**
   * Actualiza un usuario existente.
   * @param id - El ID del usuario a actualizar.
   * @param updateData - Los datos parciales para actualizar el usuario.
   * @returns El usuario actualizado.
   * @throws NotFoundException Si el usuario no existe.
   */
  updateUser(id: string, updateData: Partial<User>): User;

  /**
   * Elimina un usuario por su ID.
   * @param id - El ID del usuario a eliminar.
   * @throws NotFoundException Si el usuario no existe.
   */
  deleteUser(id: string): void;
}
