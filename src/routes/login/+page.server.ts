import { fail, type Actions } from '@sveltejs/kit';

interface LoginResponse {
  status: string;
  error?: string;
  sessionToken: {
    token: string;
    expiration: number;
  };
  user: {
    id: string;
    email: string;
    password: string;
    salt: string;
    createdAt: string;
  };
}

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    const response = await fetch('http://api-user-service/users/login', {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData: LoginResponse = await response.json();

    if (responseData.error != null) {
      return fail(response.status, { error: responseData.error });
    }

    cookies.set('sessionToken', responseData.sessionToken.token, {
      maxAge: responseData.sessionToken.expiration,
      secure: false,
      path: '/',
      httpOnly: true
    });
  }
} satisfies Actions;
