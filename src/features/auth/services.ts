import axios from "axios";
import { useState } from "react";
import Env from "../../config/env";
import { ISignupUserForm } from "./types";


export default function useLoginServices() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  async function userLogin(email: string, password: string) {
    return axios.post(
      Env.baseURL + "/accounts/v2/signin",
      {
        username: email.toLowerCase(),
        password: password,
      },
      {
        headers: {},
      }
    );
  }

 

  async function userSignup(b: ISignupUserForm) {
    return axios.post(
      Env.baseURL + "/auth/self-signup",
      {
        full_name: b.full_name,
        phone: b.username,
        password: b.password,
      },
      {
        headers: {},
      }
    );
  }

  return {
    userLogin,
    userSignup,
    submitted,
    setSubmitted,
    
  };
}
