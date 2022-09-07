import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import format from "comma-number";
import PropTypes from "prop-types";
import React from "react";

export default function Scorecard({ header, link, metric, color }) {
  const number = format(metric);

  return (
    <div className="metric-card max-w-md overflow-hidden rounded bg-stone-800 p-5 shadow">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center pb-2 text-stone-50">
          <p className="text-lg font-medium">{header}</p>
          <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
        </div>
      </a>
      <p
        className={`mt-1 text-3xl font-semibold
        ${
          color == "slate"
            ? "text-slate-600 drop-shadow-[0_0_0.8rem_#F1F5F940] hover:text-slate-500"
            : ""
        }
        ${
          color == "gray"
            ? "text-gray-600 drop-shadow-[0_0_0.8rem_#F3F4F640] hover:text-gray-500"
            : ""
        }
        ${
          color == "zinc"
            ? "text-zinc-600 drop-shadow-[0_0_0.8rem_#F4F4F540] hover:text-zinc-500"
            : ""
        }
        ${
          color == "neutral"
            ? "text-neutral-600 drop-shadow-[0_0_0.8rem_#F5F5F540] hover:text-neutral-500"
            : ""
        }
        ${
          color == "stone"
            ? "text-stone-600 drop-shadow-[0_0_0.8rem_#F5F5F440] hover:text-stone-500"
            : ""
        }
        ${
          color == "red"
            ? "text-red-600 drop-shadow-[0_0_0.8rem_#FECACA40] hover:text-red-500"
            : ""
        }
        ${
          color == "orange"
            ? "text-orange-600 drop-shadow-[0_0_0.8rem_#FFEDD540] hover:text-orange-500"
            : ""
        }
        ${
          color == "amber"
            ? "text-amber-600 drop-shadow-[0_0_0.8rem_#FEF3C740] hover:text-amber-500"
            : ""
        }
        ${
          color == "lime"
            ? "text-lime-600 drop-shadow-[0_0_0.8rem_#ECFCCB40] hover:text-lime-500"
            : ""
        }
        ${
          color == "green"
            ? "text-green-600 drop-shadow-[0_0_0.8rem_#DCFEC740] hover:text-green-500"
            : ""
        }
        ${
          color == "emerald"
            ? "text-emerald-600 drop-shadow-[0_0_0.8rem_#D1FAE540] hover:text-emerald-500"
            : ""
        }
        ${
          color == "teal"
            ? "text-teal-600 drop-shadow-[0_0_0.8rem_#CCFBF140] hover:text-teal-500"
            : ""
        }
        ${
          color == "cyan"
            ? "text-cyan-600 drop-shadow-[0_0_0.8rem_#CFFAFE40] hover:text-cyan-500"
            : ""
        }
        ${
          color == "sky"
            ? "text-sky-600 drop-shadow-[0_0_0.8rem_#E0F2FE40] hover:text-sky-500"
            : ""
        }
        ${
          color == "blue"
            ? "text-blue-600 drop-shadow-[0_0_0.8rem_#DBEAFE40] hover:text-blue-500"
            : ""
        }
        ${
          color == "indigo"
            ? "text-indigo-600 drop-shadow-[0_0_0.8rem_#E0E7FF40] hover:text-indigo-500"
            : ""
        }
        ${
          color == "violet"
            ? "text-violet-600 drop-shadow-[0_0_0.8rem_#EDE9FE40] hover:text-violet-500"
            : ""
        }
        ${
          color == "purple"
            ? "text-purple-600 drop-shadow-[0_0_0.8rem_#F3E8FF40] hover:text-purple-500"
            : ""
        }
        ${
          color == "fuchsia"
            ? "text-fuchsia-600 drop-shadow-[0_0_0.8rem_#FAE8FF40] hover:text-fuchsia-500"
            : ""
        }
        ${
          color == "pink"
            ? "text-pink-600 drop-shadow-[0_0_0.8rem_#FCE7F340] hover:text-pink-500"
            : ""
        }
        ${
          color == "rose"
            ? "text-rose-600 drop-shadow-[0_0_0.8rem_#FFE4E640] hover:text-rose-500"
            : ""
        }
        `}
      >
        {number || "-"}
      </p>
    </div>
  );
}

Scorecard.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

Scorecard.defaultProps = {
  color: "rose",
};
