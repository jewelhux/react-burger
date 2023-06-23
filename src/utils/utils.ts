import { BURGER_API_URL } from './const';

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const checkUserEmail = async (userEmail: string) => {
  try {
    const response = await fetch(`${BURGER_API_URL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    });
    return await checkResponse(response);
  } catch (error) {
    return new Error();
  }
};
