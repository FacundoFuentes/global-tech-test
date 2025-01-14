import { UserService } from '../user/user.service';

describe('UsersService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should create a user', () => {
    const user = service.createUser({
      name: 'John',
      email: 'john@example.com',
      age: 30,
      profile: {
        id: '1',
        code: 'A1',
        profileName: 'Admin',
      },
    });
    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John');
  });

  it('should throw an error if email is not unique', () => {
    service.createUser({
      name: 'John',
      email: 'john@example.com',
      age: 30,
      profile: {
        id: '1',
        code: 'A1',
        profileName: 'Admin',
      },
    });
    expect(() => {
      service.createUser({
        name: 'John',
        email: 'john@example.com',
        age: 30,
        profile: {
          id: '1',
          code: 'A1',
          profileName: 'Admin',
        },
      });
    }).toThrow();
  });
});
