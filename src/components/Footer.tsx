type FooterProps = {
  word: string;
};

const Footer = ({ word }: FooterProps) => {
  return (
    <div>
      <p className="text-gray-500 underline text-body-s mb-2">Source</p>
      <a className="text-body-s" href={`https://en.wiktionary.org/wiki/${word}`}>
        {`https://en.wiktionary.org/wiki/${word}`}
      </a>
    </div>
  );
};

export default Footer;
