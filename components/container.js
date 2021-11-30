import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Next Js Project</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div className="container m-3 p-4">{props.children}</div>
    </div>
  );
};

export default Container;
