import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const users = [
  {
    name: "Test",
    username: "Test",
    password: "$2b$10$T7eg5rYPr4RSMbuxD4Ao.OnDK2B1Pv2EBSmTMjPBmJlaaaN7V9Moq",
    friends: [],
    enemies: [],
    age: 18,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisneyypixar.fandom.com%2Fes%2Fwiki%2FPeter_Pan_(Personaje)&psig=AOvVaw2xHp7ItZsQ6UoU0NI2GM0D&ust=1636834753480000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDQ2OLSk_QCFQAAAAAdAAAAABAD",
    id: "1",
  },
  {
    name: "Test1",
    username: "Test1",
    password: "$2b$10$T7eg5rYPr4RSMbuxD4Ao.OnDK2B1Pv2EBSmTMjPBmJlaaaN7V9Moq",
    friends: [],
    enemies: [],
    age: 18,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisneyypixar.fandom.com%2Fes%2Fwiki%2FPeter_Pan_(Personaje)&psig=AOvVaw2xHp7ItZsQ6UoU0NI2GM0D&ust=1636834753480000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDQ2OLSk_QCFQAAAAAdAAAAABAD",
    id: "2",
  },
];

export const handlers = [
  rest.get(`${apiUrl}social`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),

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
