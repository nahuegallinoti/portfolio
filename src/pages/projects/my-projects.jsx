import React from "react";
import { Layout } from "../../layout/Layout";
import Image from "next/image";

const MyProjects = () => {
  return (
    <Layout>
      <Image src="/images/river.jpg" alt="River" width={120} height={80} />
    </Layout>
  );
};

export default MyProjects;
