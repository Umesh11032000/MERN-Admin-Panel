declare global {
  interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
  }
}

export {};