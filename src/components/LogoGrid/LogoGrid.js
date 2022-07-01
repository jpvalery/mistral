export default function LogoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 content-around items-center justify-center justify-items-center gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {children}
    </div>
  );
}

LogoGrid.propTypes = {};

LogoGrid.defaultProps = {};
