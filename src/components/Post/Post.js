import PropTypes from "prop-types";

import Header1 from "../../elements/headers/Header1/Header1";

export default function Post({ header, children }) {
  return (
    <main>
      <Header1>{header}</Header1>
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
