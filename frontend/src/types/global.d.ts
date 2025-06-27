declare global {
  interface User {
    _id: string;
    name: string;
    password: string;
    email: string;
    role: string;
  }
}

export {};