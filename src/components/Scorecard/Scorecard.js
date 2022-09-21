import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import format from "comma-number";
import PropTypes from "prop-types";
import React from "react";

export default function Scorecard({ header, link, metric, color }) {
  const number = format(metric);

  return (
    <div className="metric-card max-w-md overflow-hidden rounded-md bg-stone-800 p-6 shadow outline outline-1 outline-offset-2 outline-zinc-100/50">
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
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <p
          className={`mt-1 text-3xl font-semibold
        ${
          color == "slate"
            ? "text-slate-600 hover:text-slate-500 hover:drop-shadow-[0_0_0.8rem_#F1F5F925]"
            : ""
        }
        ${
          color == "gray"
            ? "text-gray-600 hover:text-gray-500 hover:drop-shadow-[0_0_0.8rem_#F3F4F625]"
            : ""
        }
        ${
          color == "zinc"
            ? "text-zinc-600 hover:text-zinc-500 hover:drop-shadow-[0_0_0.8rem_#F4F4F525]"
            : ""
        }
        ${
          color == "neutral"
            ? "text-neutral-600 hover:text-neutral-500 hover:drop-shadow-[0_0_0.8rem_#F5F5F525]"
            : ""
        }
        ${
          color == "stone"
            ? "text-stone-600 hover:text-stone-500 hover:drop-shadow-[0_0_0.8rem_#F5F5F425]"
            : ""
        }
        ${
          color == "red"
            ? "text-red-600 hover:text-red-500 hover:drop-shadow-[0_0_0.8rem_#FECACA25]"
            : ""
        }
        ${
          color == "orange"
            ? "text-orange-600 hover:text-orange-500 hover:drop-shadow-[0_0_0.8rem_#FFEDD525]"
            : ""
        }
        ${
          color == "amber"
            ? "text-amber-600 hover:text-amber-500 hover:drop-shadow-[0_0_0.8rem_#FEF3C725]"
            : ""
        }
        ${
          color == "lime"
            ? "text-lime-600 hover:text-lime-500 hover:drop-shadow-[0_0_0.8rem_#ECFCCB25]"
            : ""
        }
        ${
          color == "green"
            ? "text-green-600 hover:text-green-500 hover:drop-shadow-[0_0_0.8rem_#DCFEC725]"
            : ""
        }
        ${
          color == "emerald"
            ? "text-emerald-600 hover:text-emerald-500 hover:drop-shadow-[0_0_0.8rem_#D1FAE525]"
            : ""
        }
        ${
          color == "teal"
            ? "text-teal-600 hover:text-teal-500 hover:drop-shadow-[0_0_0.8rem_#CCFBF125]"
            : ""
        }
        ${
          color == "cyan"
            ? "text-cyan-600 hover:text-cyan-500 hover:drop-shadow-[0_0_0.8rem_#CFFAFE25]"
            : ""
        }
        ${
          color == "sky"
            ? "text-sky-600 hover:text-sky-500 hover:drop-shadow-[0_0_0.8rem_#E0F2FE25]"
            : ""
        }
        ${
          color == "blue"
            ? "text-blue-600 hover:text-blue-500 hover:drop-shadow-[0_0_0.8rem_#DBEAFE25]"
            : ""
        }
        ${
          color == "indigo"
            ? "text-indigo-600 hover:text-indigo-500 hover:drop-shadow-[0_0_0.8rem_#E0E7FF25]"
            : ""
        }
        ${
          color == "violet"
            ? "text-violet-600 hover:text-violet-500 hover:drop-shadow-[0_0_0.8rem_#EDE9FE25]"
            : ""
        }
        ${
          color == "purple"
            ? "text-purple-600 hover:text-purple-500 hover:drop-shadow-[0_0_0.8rem_#F3E8FF25]"
            : ""
        }
        ${
          color == "fuchsia"
            ? "text-fuchsia-600 hover:text-fuchsia-500 hover:drop-shadow-[0_0_0.8rem_#FAE8FF25]"
            : ""
        }
        ${
          color == "pink"
            ? "text-pink-600 hover:text-pink-500 hover:drop-shadow-[0_0_0.8rem_#FCE7F325]"
            : ""
        }
        ${
          color == "rose"
            ? "text-rose-600 hover:text-rose-500 hover:drop-shadow-[0_0_0.8rem_#FFE4E625]"
            : ""
        }
        `}
        >
          {number || "-"}
        </p>
      </a>
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
