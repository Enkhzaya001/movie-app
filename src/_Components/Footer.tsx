import { Film, Mail, Phone } from "lucide-react";
export const Footer = () => {
  return (
    <div className="w-full h-[280px] bg-[#4338CA] flex justify-center items-center sm:p-5 md:p-20">
      <div className="h-[200px] w-full  text-white ml-[40px] md:flex md:justify-between ">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Film color={"white"} />
            <p className="font-bold italic">Movie Z</p>
          </div>
          <p> © 2025 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-15 mt-[20px] md:mt-0">
          <div className="gap-5">
            <p>Contact Information</p>
            <div className="flex gap-2">
              <div className="flex justify-center items-center">
                <Mail />
              </div>
              <div>
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex justify-center items-center">
                <Phone />
              </div>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <p>Follow us </p>
            <div className=" md:flex gap-10">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
