import { useState } from 'react';

import { Section } from '../layout/Section';
import Line from '../ui/Line';

const Demo = () => {
  const [commute, setCommute] = useState<number>(35);
  const [dailyEmails, setDailyEmails] = useState<number>(
    Math.floor(35 * 0.8 * 2)
  );
  const [weeklyTime, setWeeklyTime] = useState<number>(
    Math.floor((35 * 5 * 2) / 60)
  );

  const updateEmails = (commuteMins: number) => {
    const emails = Math.floor(commuteMins * 0.8 * 2);
    setDailyEmails(emails);
  };

  const decrease = () => {
    const newValue = commute - 5;
    if (newValue > 5) {
      setCommute(newValue);
      updateEmails(newValue);
      setWeeklyTime(Math.floor((newValue * 5 * 2) / 60));
    }
  };

  const increase = () => {
    const newValue = commute + 5;
    if (newValue < 125) {
      setCommute(newValue);
      updateEmails(newValue);
      setWeeklyTime(Math.floor((newValue * 5 * 2) / 60));
    }
  };

  return (
    <Section>
      <div className="noselect flex md:flex-row flex-col items-center bg-background-200 text-background-100 justify-center rounded-3xl py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-evenly">
            <div className="bg-background-100 text-center rounded-3xl p-4 m-4 w-60">
              <span className="text-10xl font-extrabold text-purple-500">
                {dailyEmails}
              </span>
              <span className="text-2xl mt-4 font-light text-background-200 leading-4">
                <br />
                Emails sent <br />a day
              </span>
            </div>
            <div className="bg-background-100 text-center rounded-3xl p-4 m-4 w-60">
              <span className="text-10xl font-extrabold text-purple-500">
                {weeklyTime}
              </span>
              <span className="text-2xl mt-4 font-light text-background-200 leading-4">
                <br />
                Hrs saved <br />
                each week
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center px-4 py-2 my-2 bg-background-100 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#232323"
              className="w-8 h-8"
              onClick={() => decrease()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>

            <div>
              <h2 className="noselect px-8 text-background-200 font-light text-3xl">
                {commute}mins
              </h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#232323"
              className="w-8 h-8"
              onClick={() => increase()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="noselect flex flex-col text-left px-4 py-2">
          <span className="font-bold text-gray-800 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-100 to-purple-100 leading-hero">
            Let&apos;s calculate <br />
            your potential <br />
            productivity
          </span>
          <Line theme={'light'} />
          <span className="text-2xl font-light text-background-100">
            How long is your drive?
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Demo;
