"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch } from "../redux/reduxHuks";
import { useRouter } from "next/navigation";

export interface Product {
  id: number;
  price: number;
  name: string;
}

const Products: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState<any>({});

  let token: string | null = "";

  if (typeof window != "undefined") {
    token = localStorage.getItem("JWT");
  }

  function getUser() {
    fetch(`https://codexium.it/api/userByID`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function login() {
    fetch(`https://codexium.it/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((data) => data.json())
      .then((data) => {
        if (typeof window != "undefined") {
          localStorage.setItem("JWT", data.token);
        }
        router.push("/contact");
        getUser();
      });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(value);

  let data = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  let list = data.map((el, i) => {
    return (
      <input
        key={el.id}
        type={el.type}
        name={el.name}
        placeholder={el.placeholder}
        onChange={handleChange}
      />
    );
  });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <form
        action=" "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {list}

        <button onClick={login}>send</button>
      </form>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Products;
