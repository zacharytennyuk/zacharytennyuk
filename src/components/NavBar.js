import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Home</a>
        <a href="/about" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">About</a>
        <a href="/resume" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Resume</a>
        <a href="/projects" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Projects</a>
        <a href="/contact" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Contact</a>
      </li>
    </ul>
  );
}