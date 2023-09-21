const Header = ({
  header,
  subHeader,
  styles,
}: {
  header: string;
  subHeader: string;
  styles?: string;
}) => {
  return (
    <div className={styles}>
      <h1 className="text-2xl font-bold">{header}</h1>
      <h2>{subHeader}</h2>
    </div>
  );
};

export default Header;
