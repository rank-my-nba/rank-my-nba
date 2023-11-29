import React from 'react';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../components/ui/button';
import UserAuthForm from '../components/UserAuthForm';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="h-full">
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
            <div className="relative z-20 gap-2 flex items-center text-lg font-medium">
              <svg
                height="25px"
                width="25px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <style type="text/css"> </style>{' '}
                  <g>
                    {' '}
                    <path
                      className="st0"
                      d="M253.811,74.063c11.175,11.806,21.933,24.358,32.207,37.566c6.99-2.851,14.011-5.579,21.114-8.095 c35.117-12.413,71.265-20.016,106.783-22.179c9.61-0.606,19.164-0.778,28.635-0.606c-5.572-5.924-11.389-11.594-17.476-16.936 c-35.649-31.306-79.671-52.371-126.881-60.278c-2.384,10.447-6.03,21.016-11.29,31.11c-5.292,10.193-12.248,19.82-20.516,28.243 C262.488,66.885,258.235,70.614,253.811,74.063z"></path>{' '}
                    <path
                      className="st0"
                      d="M415.898,110.727c-32.642,2.393-65.907,9.676-98.573,21.442c-4.244,1.532-8.496,3.138-12.741,4.818 c16.37,23.777,31.184,49.348,44.039,76.344c9.824-3.925,20.106-6.956,30.773-8.562c18.205-2.868,37.214-1.147,54.142,4.326 c17.009,5.391,31.953,13.879,45.325,22.99c11.921,8.218,22.769,16.944,33.133,25.506c0.123-21.901-2.572-44.186-8.398-66.44 c-7.759-29.602-20.376-56.565-36.754-80.334C450.162,109.548,433.136,109.433,415.898,110.727z"></path>{' '}
                    <path
                      className="st0"
                      d="M123.76,234.97c23.686-28.25,50.577-55.394,81.9-78.688c15.657-11.626,32.167-22.023,49.471-30.724 c0.86-0.435,1.721-0.82,2.589-1.246c-9.422-11.994-19.246-23.408-29.422-34.19c-17.272,8.848-35.994,14.936-54.78,19.139 c-22.63,5.063-44.686,7.628-65.669,10.291c-20.974,2.638-40.99,5.325-59.434,9.946c-6.128,1.524-12.052,3.285-17.779,5.276 c-14.084,26.177-23.687,54.797-28.004,84.612c-4.769,32.888-3.179,67.217,5.785,101.465c5.316,20.27,12.936,39.295,22.441,56.918 c9.34-18.402,19.557-36.836,30.708-55.214C79.615,292.855,100.09,263.285,123.76,234.97z"></path>{' '}
                    <path
                      className="st0"
                      d="M260.915,20.815c3.556-6.489,6.251-13.371,8.308-20.475c-25.612-1.319-51.855,1.212-78.057,8.07 c-3.146,0.827-6.26,1.704-9.34,2.638c17.173,12.348,34.034,26.145,50.274,41.392C244.356,43.789,254.368,33.317,260.915,20.815z"></path>{' '}
                    <path
                      className="st0"
                      d="M205.299,67.189c-17.723-16.551-36.141-31.323-54.854-44.342c-33.814,15.256-63.072,37.287-86.627,64.088 c-3.048,3.466-5.957,7.03-8.8,10.651c36.968-8.144,75.238-10.126,111.756-18.303C180.22,76.357,193.255,72.334,205.299,67.189z"></path>{' '}
                    <path
                      className="st0"
                      d="M253,299.082c8.546-15.518,19.245-30.356,32.126-43.433c10.881-11.052,23.105-20.581,36.059-28.479 c-13.109-27.661-28.234-53.69-44.949-77.778c-2.442,1.155-4.883,2.302-7.292,3.507c-15.535,7.873-30.552,17.345-44.973,28.053 c-28.848,21.442-54.28,46.866-76.958,73.592c-22.671,26.792-42.613,55.009-60.376,83.448 c-14.076,22.58-26.767,45.324-38.131,67.922c11.265,15.583,24.17,29.75,38.442,42.277c32.461,28.512,71.871,48.553,114.304,57.885 c1.54-6.571,2.909-13.331,4.17-20.23c2.614-14.264,4.809-29.102,7.161-44.293c4.728-30.38,9.873-62.4,20.172-94.689 C237.908,330.757,244.43,314.608,253,299.082z"></path>{' '}
                    <path
                      className="st0"
                      d="M333.728,255.485c-9.619,6.227-18.591,13.478-26.71,21.712c-21.606,21.819-35.837,49.791-45.35,79.04 c-9.595,29.34-14.937,59.884-20.016,90.002c-2.54,15.084-4.998,30.118-7.997,45.038c-1.302,6.464-2.712,12.913-4.293,19.328 c29.823,3.13,60.687,1.049,91.494-7.013c22.908-5.998,44.227-14.912,63.71-26.218c-1.868-22.712-4.572-45.972-8.455-69.676 C367.926,357.802,354.571,306.029,333.728,255.485z"></path>{' '}
                    <path
                      className="st0"
                      d="M424.616,237.739c-13.142-4.064-26.817-5.145-40.574-2.933c-7.694,1.212-15.378,3.449-22.99,6.456 c22.458,54.01,36.271,109.166,44.145,161.873c2.843,19.042,4.932,37.771,6.407,56.132c13.355-10.242,25.612-21.688,36.591-34.199 c32.544-37.05,54.051-83.137,61.196-132.452c0.016-0.074,0.016-0.148,0.033-0.213c-15.698-12.388-30.815-25.137-47.021-35.894 C450.375,248.529,437.79,241.745,424.616,237.739z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              Rank My NBA
            </div>
          </Link>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
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