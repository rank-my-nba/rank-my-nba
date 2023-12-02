import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Basketball from './Basketball';

export default function Homepage() {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full bg-[url('http://llw-magento-images-prod.s3.amazonaws.com/catalog/product/a/d/adobe-579021841.jpg')] bg-no-repeat bg-cover bg-opacity-50">
      <div className="h-screen bg-neutral-950/40 flex flex-col items-center justify-center w-full">
        <div className="absolute top-10 left-40 right-40 justify-between flex items-center gap-1 p-3">
          <div className="flex select-none items-center gap-1">
            <Basketball size={'25px'} />
            <p className="tracking-tighter text-2xl text-white font-bold">Rank My NBA</p>
          </div>
          <Link
            className="px-3 py-2 text-sm bg-rose-600 hover:bg-rose-600/90 rounded-lg"
            to="/login">
            Login
          </Link>
        </div>
        <div className="flex flex-col gap-12 items-center">
          <h1
            role="test"
            className="select-none text-6xl font-bold tracking-tighter text-neutral-200">
            Rank My NBA
          </h1>
          <h3 className="select-none text-xl w-[32rem] text-center text-neutral-200">
            Craft Your Courtside Narrative: <br></br>Personalized NBA Rankings at Your Fingertips{' '}
          </h3>
          <div className="flex gap-2">
            <Link to="/login">
              <Button className="rounded-xl">
                Get Started Now
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
