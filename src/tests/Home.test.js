import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Feeling from '../pages/Home'
import CatGrid from '../pages/Home'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render feeling", () => {


    act(() => {
        render(<Feeling />, container);
    });
    console.log(container.textContent)
    expect(container.textContent).toContain("How are you feeling?")
})

it("render cats", () => {
    const catnames = ["Abyssinian Cat", "American Bobtail Cat Breed", "American Curl Cat Breed", "Burmese Cat",
    "Cornish Rex Cat Breed", "Egyptian Mau Cat", "Exotic Shorthair Cat Breed", "Himalayan Cat Breed",
    "Japanese Bobtail Cat Breed", "LaPerm Cat", "Manx Cat", "Ocicat Cat Breed", "Persian Cat Breed",
    "Pixiebob Cat Breed", "Ragamuffin Cat Breed", "Russian Blue Cat Breed", "Scottish Fold Cat Breed",
    "Siamese Cat Breed", "Somali Cat Breed", "Toyger Cat Breed", "Turkish Van Cat Breed"];

    act(() => {
        render(<CatGrid />, container);
    });
    console.log(container.textContent)
    catnames.forEach(element => {
        expect(container.textContent).toContain(element)
    });
    // expect(container.textContent).toContain("Abyssinian Cat")
})