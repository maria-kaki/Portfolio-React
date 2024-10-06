import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className="flex space-x-4 text-xl">
      <a href="https://www.linkedin.com/in/mariaclaradeveloper/" className="hover:text-blue-900" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/maria-kaki" className="hover:text-blue-900" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
