import React, { useState, useEffect, useContext  } from "react";
import UserContext from "@/context/UserContext";
import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useFetch from "@/hooks/useFetch";
import Notification from "@/components/UI/Notification";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const { login } = useContext(UserContext);

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState();
  
  const { fetchData, data, error, loading } = useFetch({ url: "/auth/login", method: "POST", body: userForm, token: null })
  const { data: user, error: userError, loading:userLoading, fetchData:fetchDataUser } = useFetch({ url: "/user", method: "GET", body: null, token: token });

  useEffect(() => {
    if (data.token) {
      setToken(data.token);
      localStorage.setItem('token', data.token);     
    }
  }, [data]);

  useEffect(() => {
    fetchDataUser();
    if (user.success) {
      login({
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email:user.user.email
      })
      router.push('/account/profil');
    }
  },[token,user])


  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    fetchData();
  }
  return (
    <div className={style.form_cont}>
      <Loading isLoad={loading} />
      <Title level="h1" title="LOGIN" className="h1_pink" size="title" />
      <div>
        <p className="p p_small">You don't have an account ?</p>
        <div className={style.linkCont}>
          <Link href="/auth/register" className={style.a_nav}>
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
      {
        error && (
          <Notification type="warning" message={error.message}/>
        )
      }
      <div className={style.returnLink}>
        <Link href="/" className={style.a_nav_return}>
          Back
        </Link>
      </div>
    </div>
  );
}
