import React from "react";
const AuthenticationContext = React.createContext({
  looseWeight: "",
  gainWeight: "",
  currentBMI: "",
  desiredBMI: "",
  numbersOfDays: "",
  isClickedCountButton: true,
});

export default AuthenticationContext;
