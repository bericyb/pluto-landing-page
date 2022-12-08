/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

import { Button } from '../button/Button';
import Line from '../ui/Line';

export const Showcase = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-2 mb-40">
        <span className="text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-lightBlue-100 leading-hero">
          Safe, <em>fast</em>, & productive
        </span>
        <br />
        <span className="text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600 leading-hero">
          on the go.
        </span>
        <div className="flex flex-row justify-between">
          <div className="max-w-xs">
            <Line theme={'dark'} />
            <span className="text-2xl font-light text-gray-700 text-left mb-4">
              Pluto takes short phrases and uses contextual ai to expand them
              into full-fat professional responses so you stay safe driving.
            </span>
          </div>
          <div className="bg-purple-500 rounded-3xl items-start max-w-xs flex flex-col p-4 leading-6">
            <img src="https://via.placeholder.com/50x50"></img>
            <span className="text-2xl font-bold text-background-100">
              &quot;Remind Alex about the design sprint meeting today.&quot;
            </span>
            <img src="https://via.placeholder.com/350x150"></img>
          </div>
          <div className="bg-purple-500 rounded-3xl items-start max-w-xs flex flex-col p-4 leading-6">
            <img src="https://via.placeholder.com/50x50"></img>
            <span className="text-2xl font-bold text-background-100">
              &quot;Remind Alex about the design sprint meeting today.&quot;
            </span>
            <img src="https://via.placeholder.com/350x150"></img>
          </div>
        </div>
        <Link href="">
          <a>
            <Button xl>Get Pluto</Button>
          </a>
        </Link>
        <br />
        <br />
        <div className="bg-pink-100 p-16 shadow-2xl rounded-3xl">
          <div className="flex flex-row justify-between">
            <div className="items-center justify-center">
              <img src="https://via.placeholder.com/50x50" />
              <span className="text-3xl font-bold">
                &quot;Tell Jamie that we&apos;ll have to move our lunch meeting
                to 3pm today.&quot;
              </span>
            </div>
            <img src="https://via.placeholder.com/800x250" />
          </div>
        </div>
      </div>
    </>
  );
};
