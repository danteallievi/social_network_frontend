import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const robots = {};

export const handlers = [
  rest.get(apiUrl, async (req, res, ctx) => res(ctx.json(robots))),

  rest.post(`${apiUrl}user/login`, async (req, res, ctx) => {
    const response = {
      token: "123",
    };
    return res(ctx.status(200), ctx.json(response));
  }),
];
