import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full pt-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
          Built by @makrdev | ©2023 makrdev. All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
