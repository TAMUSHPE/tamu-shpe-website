'use client';

//<NewsletterBox signupUrl="https://preview.mailerlite.io/forms/645055/163550655240209963/share" />
//import for the home page

type NewsletterBoxProps = {
  signupUrl?: string;
};

export default function NewsletterBox({
  signupUrl = 'https://preview.mailerlite.io/forms/645055/163550655240209963/share',
}: NewsletterBoxProps) {
  return (
    <div style={{ overflow: 'hidden', width: '100%', maxWidth: '401px' }}>
      <iframe
        src={signupUrl}
        width="100%"
        height="620"
        frameBorder="0"
        scrolling="no"
        title="Newsletter Signup Form"
        style={{
          display: 'block',
          marginLeft: '-1px',
          marginRight: '-60px',
          marginTop: '-25px',
          marginBottom: '-25px',
          width: 'calc(100% -30px)',
        }}
      />
    </div>
  );
}
