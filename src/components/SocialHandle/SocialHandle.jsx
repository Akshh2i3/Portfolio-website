import './SocialHandle.scss';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SiGeeksforgeeks } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";


const SocialHandle = () => {
  return (
    <div className="socialhandle">
      <a href="https://www.github.com/Akshh2i3" target="_blank">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.leetcode.com/akshaysethiya/" target="_blank">
        <SiLeetcode className="icon" />
      </a>
      <a
        href="https://www.geeksforgeeks.org/user/akshayseyl69/"
        target="_blank"
      >
        <SiGeeksforgeeks className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/akshaysethiya/" target="_blank">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.instagram.com/akshayy.devv/" target="_blank">
        <GrInstagram className="icon" />
      </a>
    </div>
  );
};

export default SocialHandle;
