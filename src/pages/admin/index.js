import React, { useState } from "react";
import style from "./index.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  // JOB
  const [userFormJob, setUserFormJob] = useState({
    newjob: "",
  });
  const handleJobChange = (e) => {
    setUserFormJob({
      ...userFormJob,
      [e.target.name]: e.target.value,
    });
  };
  const submitNewJob = (e) => {
    e.preventDefault();
    router.reload();
  };
  const deleteJob = (e) => {
    e.preventDefault();
    console.log("job deleted");
  };
  // SKILL
  const [userFormSkill, setUserFormSkill] = useState({
    newskill: "",
  });
  const handleSkillChange = (e) => {
    setUserFormSkill({
      ...userFormSkill,
      [e.target.name]: e.target.value,
    });
  };
  const submitNewSkill = (e) => {
    e.preventDefault();
    router.reload();
  };
  const deleteSkill = (e) => {
    e.preventDefault();
    console.log("skill deleted");
  };
  return (
    <>
      <div className={style.middle}>
        <Title level="h1" title="See all jobs and skills" className="h1_pink" />
      </div>
      <div className={style.jobs_skills_cont}>
        <div className={style.jobs_cont}>
          <Title level="h2" title="Jobs" className="h2_pink" size="big" />
          <form onSubmit={(e) => submitNewJob(e)} className={style.form}>
            <Input
              label="Create a New Job"
              type="text"
              name="newjob"
              placeholder="Put your Job name"
              required={true}
              onChange={(e) => handleJobChange(e)}
              value={userFormJob.newjob}
            />
            <Button type="submit" title="Create" className="btn_primary" />
          </form>
          <div className={style.text_cont}>
            <div className={style.text_div}>
              <p className="p p_medium">DEV WEB</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteJob(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">WEB DESIGN</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteJob(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">UI</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteJob(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">UX</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteJob(e)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
        <div className={style.skills_cont}>
          <Title level="h2" title="Skills" className="h2_pink" size="big" />
          <form onSubmit={(e) => submitNewSkill(e)} className={style.form}>
            <Input
              label="Create a New Skill"
              type="text"
              name="newskill"
              placeholder="Put your Skill name"
              required={true}
              onChange={(e) => handleSkillChange(e)}
              value={userFormSkill.newskill}
            />
            <Button type="submit" title="Create" className="btn_primary" />
          </form>
          <div className={style.text_cont}>
            <div className={style.text_div}>
              <p className="p p_medium">HTML</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteSkill(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">JS</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteSkill(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">REACT</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteSkill(e)}
              >
                DELETE
              </button>
            </div>
            <div className={style.text_div}>
              <p className="p p_medium">CSS</p>
              <button
                className="btn btn_secondary"
                onClick={(e) => deleteSkill(e)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
