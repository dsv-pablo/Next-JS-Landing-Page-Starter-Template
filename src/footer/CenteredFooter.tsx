import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center justify-center gap-4">
      <nav>
        <ul className="navbar mt-5 flex flex-row justify-center text-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      <div className="mt-5 flex justify-center">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
