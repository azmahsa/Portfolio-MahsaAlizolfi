"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpz4yzq",
        "template_kq866v7",
        form.current,
        "XabnX2TFugxOdcPt8"
      )
      .then(
        () => {
          toast.success("Your message has been successfully sent.😍")
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Your message was not sent.try again...🙁")

        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex  items-center">
        <Input type="name" name="user_name" id="name" placeholder="Your Name" />
        <User className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex  items-center">
        <Input
          type="email"
          id="email"
          name="user_email"
          placeholder="Your Email"
        />
        <MailIcon className=" absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex  items-center">
        <Textarea name="message" placeholder="Type Your Message ..." />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        value="Send"
        className=" flex items-center gap-x-1 max-w-[166px]"
      >
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
