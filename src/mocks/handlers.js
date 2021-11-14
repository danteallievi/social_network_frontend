import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}user/login`, async (req, res, ctx) => {
    const response = {
      token: "123",
    };
    return res(ctx.status(200), ctx.json(response));
  }),

  rest.post(`${apiUrl}user/register`, async (req, res, ctx) => {
    const response = {
      name: "test",
      username: "test",
      password: "test",
      age: 1,
      image: "test",
      friends: [],
      enemies: [],
      id: "123",
    };
    return res(ctx.status(200), ctx.json(response));
  }),
];
