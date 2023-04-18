import React, { useState, useEffect } from "react";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useFetch from "@/hooks/useFetch";

export default function Register() {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { fetchData, data, error, loading } = useFetch({
    url: "/auth/register",
    method: "POST",
    body: userForm,
  });
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }
  const submitRegister = (e) => {
    e.preventDefault();
    fetchData();
    console.log(data);
  }
  return (
    <div className={style.form_cont}>
      <Title level="h1" title="REGISTER" className="h1_pink" size="title" />
      <div>
        <p className="p p_small">You already have an account ?</p>
        <div className={style.linkCont}>
          <Link href="/auth/login" className={style.a_nav}>
            Connect
          </Link>
        </div>
      </div>
      <form onSubmit={(e) => submitRegister(e)} className={style.form}>
        <div className={style.inputName}>
        <Input
          label="FirstName"
          type="firstName"
          name="firstName"
          placeholder="Put your First Name"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.firstName}
          />
        <Input
          label="LastName"
          type="lastName"
          name="lastName"
          placeholder="Put your Last Name"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.lastName}
          />
          </div>
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
        <Button type="submit" title="Sign In" className="btn_primary" />
      </form>
      <div className={style.returnLink}>
        <Link href="/" className={style.a_nav_return}>
          Back
        </Link>
      </div>
    </div>
  );
}
