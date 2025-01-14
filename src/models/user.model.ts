export class Profile {
  id: string;
  code: string;
  profileName: string;
}

export class User {
  id: string;
  name: string;
  email: string;
  age: number;
  profile: Profile;
}
