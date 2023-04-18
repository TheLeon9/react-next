import style from "@/styles/auth/auth.module.scss";
import Link from "next/link";
import Title from "@/components/UI/Title";

export default function About() {
  return (
    <div className={style.form_cont}>
      <Title level="h1" title="ABOUT" className="h1_pink" size="title" />
      <p className="p p_small">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida
        libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem,
        fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia
        justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo
        accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies,
        lacus
      </p>
      <div className={style.about_link_cont}>
        <Title level="h2" title="START WITH" className="h2_pink" size="big" />
        <div className={style.about_button_cont}>
          <div className={style.about_button_register}>
            <Link href="/auth/register" className={style.a_nav}>
              Register
            </Link>
          </div>
          <div className={style.about_button_login}>
            <Link href="/auth/login" className={style.a_nav}>
              Login
            </Link>
          </div>
        </div>
        <div className={style.returnLink}>
          <Link href="/" className={style.a_nav_return}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
