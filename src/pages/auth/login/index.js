import React, { useState } from "react";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();


  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    const options = ["freelance", "company"];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    router.push(`/${randomOption}`);
  };
  return (
    <div className={style.form_cont}>
      <Title level="h1" title="LOGIN" className="h1_pink" size="title" />
      <div>
        <p className="p p_small">You don't have an account ?</p>
        <div className={style.linkCont}>
          <Link href="/auth/about" className={style.a_nav}>
            Create One
          </Link>
        </div>
      </div>
      <form onSubmit={(e) => submitLogin(e)} className={style.form}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Put your Mail"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Put your PassWord"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.password}
        />
        <Button type="submit" title="Login" className="btn_primary" />
      </form>
      <div className="returnLink">
        <Link href="/" className="basic_link">
          Back
        </Link>
      </div>
    </div>
  );
}
