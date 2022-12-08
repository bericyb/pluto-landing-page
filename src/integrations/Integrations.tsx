/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

import { Button } from '../button/Button';

export const Integrations = () => {
  return (
    <div className="flex flex-col items-center my-40">
      <span className="text-transparent text-center text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-lightBlue-100 leading-hero">
        Connect your tools <br />
        to Pluto
      </span>
      <div className="mb-20 mt-16">
        <Link href="">
          <a>
            <Button xl>Get Pluto</Button>
          </a>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <div className="max-w-xs bg-red-500 rounded-3xl mx-4 p-8 ">
          <img src="https://via.placeholder.com/50x50"></img>
          <span className="text-3xl font-bold">Brand</span>
          <br />
          <span className="text-2xl font-light">
            Description of what the integration will do for you...
          </span>
        </div>
        <div className="max-w-xs bg-red-500 rounded-3xl mx-4 p-8 ">
          <img src="https://via.placeholder.com/50x50"></img>
          <span className="text-3xl font-bold">Brand</span>
          <br />
          <span className="text-2xl font-light">
            Description of what the integration will do for you...
          </span>
        </div>
        <div className="max-w-xs bg-red-500 rounded-3xl mx-4 p-8 ">
          <img src="https://via.placeholder.com/50x50"></img>
          <span className="text-3xl font-bold">Brand</span>
          <br />
          <span className="text-2xl font-light">
            Description of what the integration will do for you...
          </span>
        </div>
      </div>
    </div>
  );
};
