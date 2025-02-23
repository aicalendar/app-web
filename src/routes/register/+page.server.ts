import { fail, type Actions } from '@sveltejs/kit';

interface RegisterResponse {
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
	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const response = await fetch('http://api-user-service/users/register', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseData: RegisterResponse = await response.json();

		if (responseData.error != null) {
			return fail(response.status, { error: responseData.error });
		}

		return { success: true };
	}
} satisfies Actions;
