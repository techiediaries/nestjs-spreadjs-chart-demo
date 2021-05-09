import { Container, Row, Col } from 'react-bootstrap'
//import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const SpreadSheet = dynamic(
  () => {
    return import("../components/SpreadSheet");
  },
  { ssr: false }
);




export default function Home() {

  return (

    <Container>
      <h1>
        Adding Spreadsheets to a Jamstack Application
    </h1>
      <p>
        Next.JS + SpreadJS demo
    </p>
      <Container>
        <Row className="justify-content-md-between">

          <Col>

            <SpreadSheet />


          </Col>

        </Row>
      </Container>
    </Container>

  )
}

/*export async function getStaticProps(context) {
  const data = [
    { Name: "JHON", AGE: 20 },
    { Name: "JHON", AGE: 20 },
    { Name: "KEvin", AGE: 20 },
    { Name: "Brander", AGE: 20 },
    { Name: "Sharad", AGE: 20 }
  ];

  return {
    props: {
      data: data
    },
    revalidate: 1,
  };
}*/