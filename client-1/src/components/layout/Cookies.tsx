import CookieConsent, { Cookies } from 'react-cookie-consent';

const Cookies = (props: any) => {
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => {
        console.log(`don't use cookies`);
      }}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          console.log('Accept was triggered by user scrolling');
        } else {
          console.log('Accept was triggered by clicking the Accept button');
        }
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookies;
