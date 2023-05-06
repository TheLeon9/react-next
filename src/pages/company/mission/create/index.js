import React, { useState } from "react";

import style from "../../index.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    dateStart: "",
    dateEnd: "",
    amount: "",
    title: "",
    description: "",
    status: "",
    skills: [""],
    propositions: [""],
    company: "",
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
        title="Create a new Mission"
        className="h1_pink"
      />
      <form onSubmit={(e) => submitRegister(e)} className={style.form}>
        <div className={style.form_wrapper}>
          <div className={style.form_one}>
            <div className={style.form_input_cont}>
              <Input
                label="Title"
                type="text"
                name="title"
                placeholder="Put your mission Title"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.title}
              />
              <Input
                label="Description"
                type="text"
                name="description"
                placeholder="Put your mission Description"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.description}
              />
              <Input
                label="Start Date"
                type="date"
                name="dateStart"
                placeholder="Put your mission start Date"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.dateStart}
              />
              <Input
                label="End Date"
                type="date"
                name="dateEnd"
                placeholder="Put your mission end Date"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.dateEnd}
              />
              <Input
                label="Amount (€)"
                type="text"
                name="amount"
                placeholder="Put your mission Amount in €"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.amount}
              />
              <Input
                label="Company Name"
                type="text"
                name="company"
                placeholder="Put your Company Name"
                required={true}
                onChange={(e) => handleChange(e)}
                value={userForm.company}
              />
              <Input
                label="Mission Status"
                type="text"
                name="status"
                disabled="disabled"
                value="IN_PROGRESS"
              />
            </div>
          </div>
          <div className={style.form_two}>
            <div className={style.form_input_cont}>
              <div className={style.select_input_cont}>
                <span className="span">Choose 3 Freelances</span>
                <div className={style.select_input}>
                  <select name="propositions" id="">
                    <option value="">-- Choose Freelance --</option>
                    <option value="">Mat.M</option>
                    <option value="">The.M</option>
                    <option value="">Cla.M</option>
                  </select>
                  <select name="propositions" id="">
                    <option value="">-- Choose Freelance --</option>
                    <option value="">Mat.M</option>
                    <option value="">The.M</option>
                    <option value="">Cla.M</option>
                  </select>
                  <select name="propositions" id="">
                    <option value="">-- Choose Freelance --</option>
                    <option value="">Mat.M</option>
                    <option value="">The.M</option>
                    <option value="">Cla.M</option>
                  </select>
                </div>
              </div>
              <div className={style.select_input_cont}>
                <span className="span">Choose 4 skills</span>
                <div className={style.select_input_skills}>
                  <select name="skills" id="">
                    <option value="">-- Choose Skills --</option>
                    <option value="">JS</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                    <option value="">REACT</option>
                  </select>
                  <select name="skills" id="">
                    <option value="">-- Choose Skills --</option>
                    <option value="">JS</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                    <option value="">REACT</option>
                  </select>
                  <select name="skills" id="">
                    <option value="">-- Choose Skills --</option>
                    <option value="">JS</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                    <option value="">REACT</option>
                  </select>
                  <select name="skills" id="">
                    <option value="">-- Choose Skills --</option>
                    <option value="">JS</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                    <option value="">REACT</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" title="Create" className="btn_primary" />
      </form>
    </div>
  );
}
