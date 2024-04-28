import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";
const Contact = () => {
  return (
    <section>
      <div className=" container mx-auto">
        {/* text */}
        <div className=" grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 ">
          <div className=" flex flex-col justify-center">
            <div className=" flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h3 className="h3 max-w-md mb-8">
              Got a question or proposal, or just want to say hello? Go
              ahead🤭😍
            </h3>
          </div>
          <div className=" hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat "></div>
        </div>
        {/* info text & form */}
        <div className=" grid xl:grid-cols-2 mb-24 xl:mb-52 ">
          <div className=" flex flex-col gap-y-4 xl:gap-y-4 mb-12 xl:mb-24 text-base xl:text-lg ">
          <div className="flex items-center gap-x-8 ">
            <MailIcon size={18} className="text-primary"/>
            <div>Mahsa.alizolfii2@gmail.com</div>
          </div>
          <div className="flex items-center gap-x-8 ">
            <HomeIcon size={18} className="text-primary"/>
            <div>Iran/Isfahan , meraj</div>
          </div>
          <div className="flex items-center gap-x-8 ">
            <PhoneIcon size={18} className="text-primary"/>
            <div>+98 939 079 0059</div>
          </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
