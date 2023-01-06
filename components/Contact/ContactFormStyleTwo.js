import React, { useState } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://us12.list-manage.com/contact-form?u=fdd40ebf441b888a2d75c41fd&form_id=eee2e8567ab48c31cc20a0349787ec09";

const ContactFormStyleTwo = ({ status, message, subject, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      subject &&
      message &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
        SUBJECT: subject.value,
        MESSAGE: message.value
      });

    return (
        <div
        style={{
          background: "#efefef",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (subject = node)}
          type="subject"
          placeholder="Your subject"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (message = node)}
          type="message"
          placeholder="Your message"
        />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    )
        };

export default ContactFormStyleTwo;