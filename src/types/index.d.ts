interface CreateProductDTO {
  id: number;
  name: string;
  price: number;
  comparePrice?: number;
  description: string;
}

interface NormalSignUp {
  username: string;
  email: string;
  password: string;
}

interface NormalLoginData {
  email: string;
  password: string;
}

interface OauthSignUpData {
  username: string;
  provider: string;
  email: string;
}
