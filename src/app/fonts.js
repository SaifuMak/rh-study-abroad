import {
  Sansita,
  Inria_Sans,
  Istok_Web,
} from 'next/font/google';

export const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700'], // Sansita supports these
  display: 'swap',
});

export const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const istokWeb = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});