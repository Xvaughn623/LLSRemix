import emailjs from '@emailjs/browser';
// Later to make this file Typescript
//import { IFormInput } from './CookieForm';

// @ts-ignore
const SendEmail = (data) => {
  // Currently Exposed Public Keys, need to figure out a way to not expose these
  emailjs
    .send('service_i48nucg', "template_gov2c7x", data, 'c16KK-QJo4soSyH6s');
}

export { SendEmail };