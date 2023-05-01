import React, { useState, useEffect, useContext } from "react";
import UserContext from "@/context/UserContext";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useFetch from "@/hooks/useFetch";
import Notification from "@/components/UI/Notification";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  // const { login } = useContext(UserContext);

  const [userForm, setUserForm] = useState({
    adminemail: "",
    adminpassword: "",
  });

  // const [token, setToken] = useState();

  // const { fetchData, data, error, loading } = useFetch({ url: "/auth/login", method: "POST", body: userForm, token: null })
  // const { data: user, error: userError, loading:userLoading, fetchData:fetchDataUser } = useFetch({ url: "/user", method: "GET", body: null, token: token });

  // useEffect(() => {
  //   if (data.token) {
  //     setToken(data.token);
  //     localStorage.setItem('token', data.token);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   fetchDataUser();
  //   if (user.success) {
  //     login({
  //       firstName: user.user.firstName,
  //       lastName: user.user.lastName,
  //       email:user.user.email
  //     })
  //     router.push('/account/profil');
  //   }
  // },[token,user])

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    router.push(`/admin`);
    // fetchData();
  };
  return (
    <div className={style.form_cont}>
      <Title level="h1" title="LOGIN ADMIN" className="h1_pink" size="title" />
      <div>
        <p className="p p_small">You don't have an ADMIN account ?</p>
        <div className={style.linkCont}>
          <span className="span">Create One in the DataBase</span>
        </div>
      </div>
      <form onSubmit={(e) => submitLogin(e)} className={style.form}>
        <Input
          label="Admin Email"
          type="email"
          name="adminemail"
          placeholder="Put your Mail"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.adminemail}
        />
        <Input
          label="Admin Password"
          type="password"
          name="adminpassword"
          placeholder="Put your PassWord"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.adminpassword}
        />
        <Button type="submit" title="Login As Admin" className="btn_primary" />
      </form>
      <div className="returnLink">
        <Link href="/" className="basic_link">
          Back
        </Link>
      </div>
    </div>
  );
}
