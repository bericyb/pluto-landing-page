import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <>
      <Background color="bg-background-100 h-8/12 max-w-screen-2xl mx-auto px-3">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <Link href="">
              <a>
                <Button xl>Get Pluto</Button>
              </a>
            </Link>
          </NavbarTwoColumns>
        </Section>

        <div className="flex flex-row">
          <Section yPadding="pt-4">
            <HeroOneButton
              title={
                <>
                  {'\n'}
                  {/* <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r to-blue-800 via-green-300 from-yellow-100"> */}
                  <span className="text-background-200 text-10xl">
                    Unproductive commute?
                  </span>
                  <br />
                  <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-100 to-purple-100">
                    Supercharge your{' '}
                  </span>
                  <br />
                  <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-100 to-purple-100">
                    drive to work
                  </span>
                </>
              }
              description="Be productive, get organized, and reach inbox zero all with hands at ten & two"
              button={
                <Link href="">
                  <a>
                    <Button xl>Get Pluto</Button>
                  </a>
                </Link>
              }
            />
          </Section>
          <div className="z-10 flex items-center justify-end">
            <img src="https://via.placeholder.com/800x400" />
          </div>
        </div>
        <div className="flex mt-12 h-4/12 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </Background>
      <div className="absolute right-0 inset-y-0 h-5/6 w-5/12 bg-gradient-to-b from-orange-100 to-purple-100 rounded-bl-3xl" />
    </>
  );
};

export { Hero };
