import { ReactNode } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import Line from '../ui/Line';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  return (
    <header>
      <h1 className="text-5xl text-gray-100 text-left font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <Line theme={'dark'} />
      <div className="text-2xl max-w-screen-sm font-light text-gray-700 text-left mb-4">
        {props.description}
      </div>
      <br />
      <br />
      <div>
        <input
          className="border-2 text-xl font-light text-background-200 py-2 px-3 border-background-200 rounded-md"
          placeholder="Enter your email address"
          type="email"
        />
      </div>
      <div className="my-4">
        <Link href="">
          <a>
            <Button xl>Get Pluto</Button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export { HeroOneButton };
