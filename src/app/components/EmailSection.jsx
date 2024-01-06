"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneIcon from "../../../public/images/phone.png";
import GithubGif from "../../../public/github-animation.gif";
import LinkedinGif from "../../../public/linkedin-animation.gif";
import InstagramGif from "../../../public/instagram-animation.gif";
import GithubIcon from "../../../public/github-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailGif from "../../../public/mail-animation.gif";
import MailIcon from "../../../public/mail-icon.png";
import Link from "next/link";

const SocialIcon = ({ href, icon, gif, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block mb-2"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Image
            src={gif}
            alt={alt}
            width={45}
            height={45}
            className="transition-transform transform-gpu hover:scale-110"
          />
        ) : (
          <Image
            src={icon}
            alt={alt}
            width={45}
            height={45}
            className="transform-gpu"
          />
        )}
      </div>
    </a>
  );
};

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&rsquo;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&rsquo;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&rsquo;ll try my best
          to get back to you!
        </p>
        <div className="flex flex-row gap-2 items-center mb-2">
          <div className="relative inline-block">
            <Image
              src={PhoneIcon}
              alt="Phone Icon"
              width={45}
              height={45}
              className="transform-gpu"
            />
          </div>
          <span className="text-white">+91 9492124299</span>
        </div>
        <div className="socials flex flex-wrap gap-2">
          <SocialIcon
            href="https://github.com/nivedita112"
            gif={GithubGif}
            icon={GithubIcon}
            alt="GithubIcon"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/niveditagudavalli112/"
            gif={LinkedinGif}
            icon={LinkedinIcon}
            alt="LinkedinIcon"
          />
          <SocialIcon
            href="https://www.instagram.com/niveditagudavalli?igsh=MTU1YTQxbjJibnhyaA=="
            gif={InstagramGif}
            icon={InstagramIcon}
            alt="InstagramIcon"
          />
          <SocialIcon
            href="mailto:niveditagudavalli112@gmail.com"
            gif={MailGif}
            icon={MailIcon}
            alt="MailIcon"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
