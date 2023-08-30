"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "@/components/ui/container";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/button";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value: any) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneNumberChange = (e: any) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    toast.success("Email sent successfully");
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_trkrlka",
      "template_fv0he2u",
      e.target,
      "fzE5ne1uhl9Hg32BC"
    );

    e.target.reset();

    setPhoneNumber("");
  };

  return (
    <Container>
      <div className="h-full w-full text-whitesmoke text-[20px] p-[20px]">
        <h2 className="text-center px-[50px] pb-[30px] font-karla text-primary-tan text-[36px] font-semibold">
          Contact Us!
        </h2>
        <form
          id="survey-form"
          onSubmit={(e) => {
            sendEmail(e);
            handleSubmit(e);
          }}
        >
          <fieldset className="w-full max-w-[800px] m-auto border-none font-karla text-primary-tan">
            <input type="hidden" name="_captcha" value="false" />

            <label htmlFor="name" id="name-label">
              Name:
            </label>
            <input
              className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px]"
              name="name"
              type="text"
              id="name"
              placeholder="Please enter your name"
              required
            />

            <label htmlFor="email" id="email-label">
              Email Address:
            </label>
            <input
              className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px]"
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
              required
            />

            <label htmlFor="phone" id="phone-label">
              Phone number:
            </label>
            <input
              className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px]"
              type="tel"
              id="phone"
              name="PhoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Please enter your phone number"
              required
            />
            <label htmlFor="questions">Any questions?</label>

            <textarea
              id="questions"
              name="message"
              rows={3}
              cols={50}
              placeholder="Please enter any questions you have"
              className="block h-[100px] w-full rounded-[5px] border-none mt-[10px] p-[10px]"
              required
            ></textarea>

            <div className="w-full flex justify-center items-center mt-4">
              <Button className="bg-secondary-tan">Submit</Button>
            </div>
          </fieldset>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
