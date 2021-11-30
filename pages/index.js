import React from "react";
import Container from "../components/container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import { Users } from "../components/users";

const index = (props) => {
  return (
    <div>
      <Container>
        <Head>
          <title>Next Project - Home</title>
        </Head>
        <h1>Consumo API / Next Js </h1>
        <Users users={props.users} />
      </Container>
    </div>
  );
};

index.getInitialProps = async () => {
  const response = await fetch(`https://reqres.in/api/users`);
  const respJson = await response.json();
  return { users: respJson.data };
};

export default index;
