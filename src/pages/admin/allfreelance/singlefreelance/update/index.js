import React, { useState, useEffect } from "react";

import style from "../../../index.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/router";

export default function Freelance() {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    newfirstName: "",
    newlastName: "",
    newemail: "",
    newcity: "",
    newaddress: "",
    newpostalcode: "",
    newnumber: "",
    newyearOfExperience: 0,
    newrate: 0,
    newuserType: "FREELANCE",
  });
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitRegister = (e) => {
    e.preventDefault();
    router.reload();
  };
  return (
    <div className={style.update_freelance_cont}>
      <Title
        level="h1"
        title="Uptdate this freelance Informations"
        className="h1_pink"
      />
      <form onSubmit={(e) => submitRegister(e)} className={style.form}>
        <div className={style.form_wrapper}>
          <div className={style.form_one}>
            <div className={style.form_input_cont}>
              <Input
                label="FirstName"
                type="text"
                name="newfirstName"
                placeholder="Put your First Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newfirstName}
              />
              <Input
                label="LastName"
                type="text"
                name="newlastName"
                placeholder="Put your Last Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newlastName}
              />
              <Input
                label="Email"
                type="email"
                name="newemail"
                placeholder="Put your Mail"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newemail}
              />
              <Input
                label="Address"
                type="text"
                name="newaddress"
                placeholder="Put your Address"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newaddress}
              />
              <Input
                label="City"
                type="text"
                name="newcity"
                placeholder="Put your City"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newcity}
              />
              <Input
                label="Postal Code"
                type="text"
                name="newpostalcode"
                placeholder="Put your Postal Code"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newpostalcode}
              />
              <Input
                label="Number"
                type="text"
                name="newnumber"
                placeholder="Put your Number"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newnumber}
              />
            </div>
          </div>
          <div className={style.form_two}>
            <div className={style.form_cont}>
              <Input
                label="Years Of Experience"
                type="number"
                name="newyearOfExperience"
                placeholder="Put your Years of exeperience"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newyearOfExperience}
              />
              <Input
                label="Rate"
                type="number"
                name="newrate"
                placeholder="How would you rate you"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newrate}
              />
            </div>
          </div>
        </div>
          <Button type="submit" title="Update" className="btn_primary" />
      </form>
    </div>
  );
}
