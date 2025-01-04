import * as React from 'react';
import { SocialIconProps } from './types';

export const SocialIcon: React.FC<SocialIconProps> = ({ iconSrc, notificationCount }) => (
  <div className="flex justify-center items-center rounded-2xl bg-indigo-950 h-[35px] min-h-[35px] w-[35px]">
    <div className="flex overflow-hidden justify-center items-center self-stretch py-2.5 pr-2.5 pl-2.5 my-auto max-w-[35px] min-h-[35px] min-w-[35px] w-[35px]">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain self-stretch my-auto w-4 aspect-square" />
    </div>
    {/* {notificationCount !== undefined && (
      <div className="flex absolute -right-0.5 -top-2 z-0 shrink-0 self-start w-4 h-4 bg-orange-500 rounded-lg" />
    )} */}
  </div>
);