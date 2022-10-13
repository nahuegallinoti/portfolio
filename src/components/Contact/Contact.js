import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  SectionDivider,
  SectionText,
  SecondaryBtn,
} from "../../styles/GlobalComponents";
import { FormContact, Input } from "./ContactStyles";

const Contact = () => {
  const handleSubmit = async () => {
    let data = {
      name: name,
      surname: surname,
      email: email,
      message: message,
    };

    fetch("http://localhost:3000/api/contact/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        console.table(await res.json());
      })
      .catch((err) => console.log(err));
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section id="contact">
      <SectionTitle mb="3rem" mt="3rem" main>
        Contact
      </SectionTitle>
      <SectionDivider mb="5rem" />
      <SectionText color="#fd5959">
        If you wish contact me, please send an email
      </SectionText>
      <FormContact>
        <label htmlFor="first">First name:</label>
        <Input
          height="4rem"
          type="text"
          id="first"
          name="first"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="last">Last name:</label>
        <Input
          height="4rem"
          type="text"
          id="last"
          name="last"
          onChange={(e) => setSurname(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <Input
          height="4rem"
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <SecondaryBtn
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </SecondaryBtn>
      </FormContact>{" "}
    </Section>
  );
};

export default Contact;
