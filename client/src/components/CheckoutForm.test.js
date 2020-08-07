import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //STEP 1: Render the Form
    render(<CheckoutForm />)
    //STEP 2: Find the header
    expect(screen.getByText(/checkout form/i));
});
// NOTE: Force failure by navigating to CheckoutForm.js, removing the "m" from form, and it failed as expected


test("form shows success message on submit with form details", () => {
    //STEP 1: Render the form
    render(<CheckoutForm />)
    // STEP 2: Check for inputs and submit buttton
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', {name: /checkout/i});
    //STEP 3: Fill out inputs
    fireEvent.change(firstNameInput, {target: { value: 'Chayce' }});
    fireEvent.change(lastNameInput, {target: { value: 'Solchaga' }});
    fireEvent.change(addressInput, {target: { value: '1234 Test Drive' }});
    fireEvent.change(cityInput, {target: { value: 'Los Angeles' }});
    fireEvent.change(stateInput, {target: { value: 'CA' }});
    fireEvent.change(zipInput, {target: { value: '90064' }});
    //STEP 4: Click CHECKOUT Button to submit form
    fireEvent.click(submitBtn);
    //STEP 5: Assertions
    expect(screen.getByText(/chayce/i))
    expect(screen.getByText(/solchaga/i))
    expect(screen.getByText(/1234 test drive/i))
    expect(screen.getByText(/los angeles/i))
    expect(screen.getByText(/90064/i))
    expect(screen.getByText(/you have ordered some plants!/i))
    expect(screen.getByText(/your new green friends will be shipped to:/i))

});
