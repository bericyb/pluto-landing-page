/* eslint-disable jsx-a11y/alt-text */
import Line from '../ui/Line';

export const Quicklook = () => {
  return (
    <div className="bg-background-200 text-background-100 py-40 text-center">
      <div className="max-w-screen-2xl mx-auto px-2 flex flex-col items-center">
        <span className="font-bold text-gray-800 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-100 to-purple-100 leading-hero">
          Manage your cluttered <br />
          inbox hands-free. <br />
        </span>
        <Line theme={'light'} />
        <span className="text-2xl font-light">
          Pluto is an opinionated productivity <br /> guide that gets you to
          inbox zero <br />
          before getting to work
        </span>
        <br />
        <br />
        <img src="https://via.placeholder.com/800x200" />
      </div>
    </div>
  );
};
