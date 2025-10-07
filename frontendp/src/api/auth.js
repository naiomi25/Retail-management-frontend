import { apiUser } from "./client";

export  const loginUser = (email, password) => {
  return apiUser("/users/login", {
    method: "POST",
    body: { email, password },
  });
}

export const registerUser = (newUser) =>{
  return apiUser("/user/register",{
     method: "POST",
    body: { newUser },
  });
}


