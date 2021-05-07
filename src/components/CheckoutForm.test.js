import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />)
    //act get the elems
    const header = screen.getByText(/Checkout Form/i)
    //assert
    expect(header).toBeInTheDocument()

});


test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />)
  //act get the elems
  const firstName = screen.getByLabelText("First Name:")
  const lastName = screen.getByLabelText("Last Name:")
  const address = screen.getByLabelText("Address:")
  const city = screen.getByLabelText("City:")
  const state = screen.getByLabelText("State:")
  const zip = screen.getByLabelText("Zip:")
  const button = screen.getByTestId("submitButton")
  
  //assert
  userEvent.type(firstName, "kait")
  userEvent.type(lastName, "hunni")
  userEvent.type(address, "111 plum st")
  userEvent.type(city, "seattle")
  userEvent.type(state, "washington")
  userEvent.type(zip, "11111")
  userEvent.click(button)
  
  const message = await screen.getByText(/You have ordered some plants! Woo-hoo!/i)
  expect(message).toBeVisible


  
});
