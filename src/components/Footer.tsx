type FooterProps = {
  word: string;
};

const Footer = ({ word }: FooterProps) => {
  return (
    <div>
      <p>Source</p>
      <a href={`https://en.wiktionary.org/wiki/${word}`}>
        {`https://en.wiktionary.org/wiki/${word}`}
      </a>
    </div>
  );
};

export default Footer;
