export class User {
  constructor(private email: string | undefined, private password: string | undefined) {
  }


  getEmail(): string | undefined {
    return this.email;
  }

  setEmail(value: string | undefined) {
    this.email = value;
  }

  getPassword(): string | undefined {
    return this.password;
  }

  setPassword(value: string | undefined) {
    this.password = value;
  }
}
