export default function Header2({ children }) {
  return (
    <h1 className="font-serif text-3xl font-extrabold tracking-tight text-white">
      {children}
    </h1>
  );
}

Header2.propTypes = {};

Header2.defaultProps = {};
