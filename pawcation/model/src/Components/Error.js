import React from "react";
import NavbarComp from "./NavbarComp";

function Error() {
  return (
    <div>
      <NavbarComp />
      <h1>Oops! You broke the internet!</h1>
      <p>
        It looks like the page you're trying to reach doesn't exist or has been
        eaten by our pet dinosaur.
      </p>
      <img
        src="https://media.giphy.com/media/oYtVHSxngRavW/giphy.gif"
        alt="Sad T-Rex"
      />
    </div>
  );
}

export default Error;
