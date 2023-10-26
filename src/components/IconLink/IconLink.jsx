import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {CiTwitter} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';

const IconLink = () => {
  return (
    <ul className="icon-container flex justify-center p-3 mt-10">
      <li className="rounded-full border-2 border-gray-300 p-2 me-5">
        <BiLogoFacebook className="text-2xl text-gray-400" />
      </li>
      <li className="rounded-full border-2 border-gray-300 p-2 me-5">
        <CiTwitter className="text-2xl text-gray-400" />
      </li>
      <li className="rounded-full border-2 border-gray-300 p-2 me-5">
        <BsGithub className="text-2xl text-gray-400" />
      </li>
    </ul>
  );
};

export default IconLink;
