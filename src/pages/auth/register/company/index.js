import React, { useState } from "react";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
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
    companyName: "",
    companyStatus: "",
    companySiret: "",
    companyAddress: "",
    companyCity: "",
    companyPostalCode: "",
    userType: "COMPANY",
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
    // console.log(userForm);
  };
  const [showFormOne, setShowFormOne] = useState(true);
  const buttonText = showFormOne ? "Swap Company Info" : "Swap User Info";
  const swap = () => {
    setShowFormOne(!showFormOne);
  };
  return (
    <div className={style.form_cont}>
      <Title
        level="h1"
        title="REGISTER COMPANY"
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
            <div className={style.inputName}>
              <Input
                label="Company Name"
                type="text"
                name="companyName"
                placeholder="Put your Company Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.companyName}
              />
              <Input
                label="Company Status"
                type="text"
                name="companyStatus"
                placeholder="Put your Company Status"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.companyStatus}
              />
            </div>
            <Input
              label="Company Siret"
              type="text"
              name="companySiret"
              placeholder="Put your Mail"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.companySiret}
            />
            <Input
              label="Company Address"
              type="text"
              name="companyAddress"
              placeholder="Put your Company Address"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.companyAddress}
            />
            <Input
              label="Company City"
              type="text"
              name="companyCity"
              placeholder="Put your Company City"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.companyCity}
            />
            <Input
              label="Company Postal Code"
              type="text"
              name="companyPostalCode"
              placeholder="Put your Company Postal Code"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.companyPostalCode}
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
