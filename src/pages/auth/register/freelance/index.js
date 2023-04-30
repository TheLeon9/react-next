import React, { useState, useEffect } from "react";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    address: "",
    postalcode: "",
    number: "",
    yearOfExperience: 0,
    rate: 0,
    userType: "FREELANCE",
  });
  const { fetchData, data, error, loading } = useFetch({
    url: "/auth/register",
    method: "POST",
    body: userForm,
  });
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitRegister = (e) => {
    e.preventDefault();
    router.push("/auth/login");
    // fetchData();
    // console.log(userForm);
  };
  const [showFormOne, setShowFormOne] = useState(true);
  const buttonText = showFormOne ? "Swap Freelance Info" : "Swap User Info";
  const swap = () => {
    setShowFormOne(!showFormOne);
  };
  return (
    <div className={style.form_cont}>
      <Title
        level="h1"
        title="REGISTER FREELANCE"
        className="h1_pink"
        size="title"
      />
      <div>
        <p className="p p_small">You already have an account ?</p>
        <div className={style.linkCont}>
          <Link href="/auth/login" className={style.a_nav}>
            Connect
          </Link>
        </div>
      </div>
      <form onSubmit={(e) => submitRegister(e)} className={style.form}>
        {showFormOne ? (
          <div className={style.form_one}>
            <div className={style.inputName}>
              <Input
                label="FirstName"
                type="text"
                name="firstName"
                placeholder="Put your First Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.firstName}
              />
              <Input
                label="LastName"
                type="text"
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
            <div className={style.inputName}>
              <Input
                label="Address"
                type="text"
                name="address"
                placeholder="Put your Address"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.address}
              />
              <Input
                label="City"
                type="text"
                name="city"
                placeholder="Put your City"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.city}
              />
            </div>
            <div className={style.inputName}>
              <Input
                label="Postal Code"
                type="text"
                name="postalcode"
                placeholder="Put your Postal Code"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.postalcode}
              />
              <Input
                label="Number"
                type="text"
                name="number"
                placeholder="Put your Number"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.number}
              />
            </div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Put your PassWord"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.password}
            />
          </div>
        ) : (
          <div className={style.form_two}>
            <Input
              label="Years Of Experience"
              type="number"
              name="yearOfExperience"
              placeholder="Put your Years of exeperience"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.yearOfExperience}
            />
            <Input
              label="Rate"
              type="number"
              name="rate"
              placeholder="How would you rate you"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.rate}
            />
            <Button type="submit" title="Sign In" className="btn_primary" />
          </div>
        )}
      </form>
      <Button
        type="button"
        title={`${buttonText}`}
        handleClick={swap}
        className="btn_secondary"
      />
      <div className="returnLink">
        <Link href="/" className="basic_link">
          Back
        </Link>
      </div>
    </div>
  );
}
