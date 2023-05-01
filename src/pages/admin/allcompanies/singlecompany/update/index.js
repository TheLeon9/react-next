import React, { useState, useEffect } from "react";

import style from "../../../index.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    newfirstName: "",
    newlastName: "",
    newemail: "",
    newcity: "",
    newaddress: "",
    newpostalcode: "",
    newnumber: "",
    newcompanyName: "",
    newcompanyStatus: "",
    newcompanySiret: "",
    newcompanyAddress: "",
    newcompanyCity: "",
    newcompanyPostalCode: "",
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
    <div className={style.update_company_cont}>
      <Title
        level="h1"
        title="Uptdate this company informations"
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
                label="Company Name"
                type="text"
                name="newcompanyName"
                placeholder="Put your Company Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newcompanyName}
              />
              <Input
                label="Company Status"
                type="text"
                name="newcompanyStatus"
                placeholder="Put your Company Status"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.newcompanyStatus}
              />
               <Input
              label="Company Siret"
              type="text"
              name="newcompanySiret"
              placeholder="Put your Mail"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.newcompanySiret}
            />
            <Input
              label="Company Address"
              type="text"
              name="newcompanyAddress"
              placeholder="Put your Company Address"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.newcompanyAddress}
            />
            <Input
              label="Company City"
              type="text"
              name="newcompanyCity"
              placeholder="Put your Company City"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.newcompanyCity}
            />
            <Input
              label="Company Postal Code"
              type="text"
              name="newcompanyPostalCode"
              placeholder="Put your Company Postal Code"
              required={true}
              onChange={(e) => handleChange(e)}
              value={userForm.newcompanyPostalCode}
            />
            </div>
          </div>
        </div>
          <Button type="submit" title="Update" className="btn_primary" />
      </form>
    </div>
  );
}
