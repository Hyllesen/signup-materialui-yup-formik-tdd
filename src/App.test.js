import {
  act,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Sign up component", () => {
  let signUpBtn,
    firstName,
    lastName,
    emailAddress,
    password,
    acceptTerms,
    alreadyAccountLink;

  beforeEach(() => {
    render(<App />);

    const signUpElements = screen.getAllByText(/sign up/i);
    signUpBtn = signUpElements[1];
    firstName = screen.getByLabelText("First Name");
    lastName = screen.getByText("Last Name");
    emailAddress = screen.getByText("Email Address");
    password = screen.getByText("Password");
    acceptTerms = screen.getByText("I accept the terms and conditions");
    alreadyAccountLink = screen.getByText("Already have an account? Sign in");
  });

  test("Fill out form and submit", async () => {
    //Wrapping element in act will remove act warning,
    //but only last character (n) will be typed
    //Removing act will let all characters be typed, but act warning will appear
    act(() => {
      userEvent.type(firstName, "Stefan");
    });

    // userEvent.type(lastName, "Hyltoft");
    // userEvent.type(emailAddress, "stefanhyltoft@gmail.com");
    // userEvent.type(password, "myPassw0rt");
    // userEvent.click(acceptTerms);
    // userEvent.click(signUpBtn);

    expect(firstName).toHaveValue("Stefan");
    // await screen.findByText(
    //   "Thanks for signing up! Please check your email for activation link."
    // );
  });

  // test("Form validation messages on no values submit", async () => {
  //   act(() => {
  //     userEvent.click(signUpBtn);
  //   });

  //   expect(await screen.findByText("First Name missing"));

  //   const confirmation = screen.queryByText(
  //     "Thanks for signing up! Please check your email for activation link."
  //   );
  //   expect(confirmation).toBeNull();
  // });
});
