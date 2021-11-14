import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
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
});
