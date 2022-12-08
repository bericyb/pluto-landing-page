import Link from 'next/link';

import { Button } from '../button/Button';

const CTABanner = () => (
  <div className="text-center my-40 flex flex-col">
    <div className="text-6xl items-center font-semibold">
      <div className="flex flex-col text-background-200">
        <span>Try the #1 software in hands-free productivity</span>
        <div className="my-40">
          <Link href="">
            <a>
              <Button xl>Get Pluto</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { CTABanner };
