import "@/styles/globals.scss";
import "@/styles/variable.scss";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import FreelanceLayout from "@/components/layouts/FreelanceLayout";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import AdminLayout from "@/components/layouts/AdminLayout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let Layout = MainLayout;
  if (router.asPath.startsWith("/auth")) {
    Layout = AuthLayout;
  } else if (router.asPath.startsWith("/freelance")) {
    Layout = FreelanceLayout;
  } else if (router.asPath.startsWith("/company")) {
    Layout = CompanyLayout;
  } else if (router.asPath.startsWith("/admin")) {
    Layout = AdminLayout;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}