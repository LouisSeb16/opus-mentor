import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import style from "@/styles/layout/dashboard/index.module.scss";
import Logo from '@/components/shared/logo';
import { chatLinks } from './data';

const DashboardSideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const checkRoutePath = (href: any) => {
    router.asPath === href && setActive(href);
  };
  const handleClick = (url: any) => {
    router.push(url);
    checkRoutePath(url);
  };

  useEffect(() => {
    let url = router.asPath;
    checkRoutePath(url);
  }, []);
  return (
    <div className={style.sidebar}>
    <div className="container" id={style.con}>
      <div className={style.header}>
        <Logo/>
      </div>
      <ul className={`navbar-nav`}>
        {chatLinks.map((data: any) => {
          return (
            <li className={`nav-item`} key={data.title}>
              <button
                onClick={() => handleClick(data.href)}
                className={active === data.href ? style.active : ""}
              >
                <i>{data.icon}</i>
                <p>{data.title}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  )
}

export default DashboardSideBar