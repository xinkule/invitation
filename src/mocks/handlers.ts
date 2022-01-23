import { rest, RequestHandler } from 'msw';

const EXISTED_EMAIL = 'usedemail@airwallex.com';

export const handlers: RequestHandler[] = [
  rest.post<{ name: string; email: string }>(
    'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    (req, res, ctx) => {
      // error trigger
      if (req.body.email === EXISTED_EMAIL) {
        return res(
          ctx.status(400),
          ctx.json({ errorMessage: 'Bad Request: Email is already in use' })
        );
      }

      // created
      return res(ctx.status(200));
    }
  ),
];
