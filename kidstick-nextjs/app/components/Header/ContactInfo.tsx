import * as React from 'react';
import { ContactInfoProps } from './types';

export const ContactInfo: React.FC<ContactInfoProps> = ({ iconSrc, label, value }) => (
  <div className="flex flex-auto gap-1 items-center">
    <div className="flex items-start self-stretch pr-1 pl-0.5">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain w-5 aspect-[0.83]" />
    </div>
    <div className="self-stretch my-auto text-xs font-bold leading-5 uppercase text-neutral-700">
      {label}:
    </div>
    <div className="self-stretch my-auto text-base font-medium leading-6 opacity-70 basis-auto text-neutral-700">
      {value}
    </div>
  </div>
);