import axios from 'axios';

const request = axios.create({ timeout: 10000 });

/**
 * send invitation
 * @param data form data
 * @returns response
 */
export function postInivation(data: { name: string; email: string }) {
  return request.post<string>(
    'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    data
  );
}
