import * as React from 'react';
import { ContactInfo } from './ContactInfo';
import { NavLink } from './NavLink';
import { SocialIcon } from './SocialIcon';

const navLinks = [
  { text: 'Home', isActive: true, suffix: '-' },
  { text: 'About' },
  { text: 'Service' },
  { text: 'Pages', suffix: '+' },
  { text: 'Blog' },
  { text: 'Pricing' },
  { text: 'Contact' },
  { text: 'Cart(0)' }
];

const socialIcons = [
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/e4b1674cd541e5f26b7e4b9b8d1a27c95af5a7db9b567a6b99f47c3e90432c91?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&' },
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/dd2bb53228addb80fb171931701cb35b6b4dbadf198639a966c62acf0c63b1f7?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&', notificationCount: 1 },
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/805e69787cc539034c5fe1ade441aaab4a8af5f51d876e815817dddbe177dacd?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&' },
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/e4f2abf4cf038514a3af1beefddd1f4d3ab9e49b3c94f3d13437d05072c35d49?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&' }
];

const contactInfo = [
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/c38dac5c9cbdd1e6b531a837f04cbfb624ac76ab32172269948d65016faa1913?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&', label: 'Email us', value: 'info@kidstick.com.bd' },
  { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/eba5316da97723dbba1ce27d541dd338aff3a6dc0d253510233f41286dae46fe?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&', label: 'Call us', value: '+8801404049797' }
];

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col justify-center items-center px-20 py-2.5 w-full border-b border-solid bg-cyan-400 bg-opacity-50 border-b-yellow-500 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1186px]">
            <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>
            <div className="flex items-start self-start py-1.5 pr-1.5 pl-5 text-sm leading-4 text-right text-black min-h-[24px]">
              <div className="opacity-70">Visit us on social networks</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-5 w-full max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/6f7f910cbdf84b78b772e5e78e5609e6/75c0b35b9ef6f87488e79ab75e799a7e21ce7110e52448716487d7ef70e69a8a?apiKey=8da3fd6b121a4ce09e18e7d9dae826f0&" alt="Logo" className="object-contain shrink-0 max-w-full aspect-[1.96] w-[137px]" />
            <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full">
              <div className="flex flex-wrap flex-auto gap-10 my-auto text-lg font-semibold leading-7 text-indigo-950 max-md:max-w-full">
                {navLinks.map((link, index) => (
                  <NavLink key={index} {...link} />
                ))}
              </div>
              <div className="flex gap-2.5">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};