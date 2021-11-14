import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";

import { server } from "./mocks/server";

import App from "./App";

jest.mock("jwt-decode");
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a App component", () => {
  describe("When the user is not logged in", () => {
    beforeEach(() => {
      const store = configureStore({ user: { isAuthenticated: false } });
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    test("Then it should render the form to login", async () => {
      const usernameForm = await screen.findByPlaceholderText(/username/i);
      const passwordForm = await screen.findByPlaceholderText(/password/i);

      expect(usernameForm).toBeInTheDocument();
      expect(passwordForm).toBeInTheDocument();
    });

    describe("And the clicks the register link, fills the form and submits", () => {
      test("Then it should render the login page again", async () => {
        const registerButton = await screen.findByRole("link", {
          name: /Sing in if you dont have account/i,
        });
        userEvent.click(registerButton);

        const nameForm = await screen.findByPlaceholderText("Name");
        const usernameForm = await screen.findByPlaceholderText(/username/i);
        const passwordForm = await screen.findByPlaceholderText(/password/i);
        const ageForm = await screen.findByPlaceholderText(/age/i);
        const buttonRegister = await screen.findByRole("button", {
          name: /sign in/i,
        });

        userEvent.type(nameForm, "toto");
        userEvent.type(usernameForm, "toto");
        userEvent.type(passwordForm, "toto");
        userEvent.type(ageForm, "1");
        userEvent.click(buttonRegister);

        const loginTitle = await screen.findByRole("heading", {
          name: /Login/i,
        });
        expect(loginTitle).toBeInTheDocument();
      });
    });

    describe("And the user fill the form and submits", () => {
      test("Then it should render the home page", async () => {
        const usernameForm = await screen.findByPlaceholderText(/username/i);
        const passwordForm = await screen.findByPlaceholderText(/password/i);
        const buttonSubmit = await screen.findByText(/log in/i);

        userEvent.type(usernameForm, "toto");
        userEvent.type(passwordForm, "toto");
        userEvent.click(buttonSubmit);

        const homeText = await screen.findByRole("heading", { name: /home/i });

        expect(homeText).toBeInTheDocument();
      });
    });
  });

  describe("When the user is logged in", () => {
    beforeEach(() => {
      const store = configureStore({ user: { isAuthenticated: true } });
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    describe("And the user click logout button", () => {
      test("Then it should render the login page", async () => {
        const buttonLogout = await screen.findByRole("button", {
          name: /log out/i,
        });

        userEvent.click(buttonLogout);

        const loginTitle = await screen.findByRole("heading", {
          name: /login/i,
        });

        expect(loginTitle).toBeInTheDocument();
      });
    });
  });
});
