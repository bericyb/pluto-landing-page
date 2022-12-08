import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    by <a href="">Pluto</a>
    <a href="https://github.com/bericyb/pluto-landing-page">Beric Bearnson</a>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-800;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
