
export default function Header1({children }) {
  return (
      <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white">
        {children}
      </h1>
  );
}

Header1.propTypes = {
};

Header1.defaultProps = {
};
