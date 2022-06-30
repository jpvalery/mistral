import PropTypes from "prop-types";

export default function Post({ header, children }) {
  return (
    <main>
      <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white">
        {header}
      </h1>
      <article className="prose prose-xl py-4 text-stone-50 prose-a:text-blue-600">
        {children}
      </article>
    </main>
  );
}

Post.propTypes = {
  header: PropTypes.string,
};

Post.defaultProps = {
  header: "Lorem Ipsum",
};
