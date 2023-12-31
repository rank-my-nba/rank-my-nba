import { useState, useEffect, SetStateAction } from 'react';
import { loginUser, checkSession } from '../fetchers/userFetcher';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../components/ui/button';
import React from 'react';
import UserAuthForm from './UserAuthForm';
import Basketball from './Basketball';

export const metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

type Data = {
  'Combined Ranking'?: number;
  PLAYER: string;
  GP: number;
  MIN: number;
  'GP Ranking': number;
  'MIN Ranking': number;
}[];

const checkData = () => {
  const data: Data = [
    {
      PLAYER: 'Mikal Bridges',
      GP: 83,
      MIN: 2963,
      'GP Ranking': 1,
      'MIN Ranking': 1
    },
    {
      PLAYER: 'JJ Hickson',
      GP: 81,
      MIN: 2363,
      'GP Ranking': 3,
      'MIN Ranking': 29
    },
    {
      PLAYER: 'Bobby Tables',
      GP: 81,
      MIN: 2363,
      'GP Ranking': 3,
      'MIN Ranking': 29
    },
    {
      PLAYER: 'LeBron James',
      GP: 76,
      MIN: 2000,
      'GP Ranking': 17,
      'MIN Ranking': 120
    }
    // ... (other objects)
  ];

  // Sort the array based on combined ranking
  data.sort((a, b) => a['GP Ranking'] + a['MIN Ranking'] - (b['GP Ranking'] + b['MIN Ranking']));

  console.log(data);
};

checkData();

export default function AuthenticationPage() {
  return (
    <div className="h-full">
      <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}>
          Login
        </Link>
        <div className="relative hidden h-full flex-col p-10 text-white border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link to="/">
            <div className="relative z-20 gap-1 flex items-center text-lg font-medium">
              <Basketball size={'25px'} />
              <p className="tracking-tighter text-2xl text-white font-bold">Rank My NBA</p>
            </div>
          </Link>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 role="heading" className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email, password, and favorite team below to create your account!
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
