import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
