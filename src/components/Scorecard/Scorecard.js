import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import format from "comma-number";
import PropTypes from "prop-types";
import React from "react";

export default function Scorecard({ header, link, metric, color }) {
  const number = format(metric);

  return (
    <div className="metric-card max-w-md overflow-hidden rounded-xl border border-zinc-100/50 bg-stone-800 p-6 shadow">
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
            ? "text-slate-600 drop-shadow-[0_0_0.8rem_#F1F5F925] hover:text-slate-500"
            : ""
        }
        ${
          color == "gray"
            ? "text-gray-600 drop-shadow-[0_0_0.8rem_#F3F4F625] hover:text-gray-500"
            : ""
        }
        ${
          color == "zinc"
            ? "text-zinc-600 drop-shadow-[0_0_0.8rem_#F4F4F525] hover:text-zinc-500"
            : ""
        }
        ${
          color == "neutral"
            ? "text-neutral-600 drop-shadow-[0_0_0.8rem_#F5F5F525] hover:text-neutral-500"
            : ""
        }
        ${
          color == "stone"
            ? "text-stone-600 drop-shadow-[0_0_0.8rem_#F5F5F425] hover:text-stone-500"
            : ""
        }
        ${
          color == "red"
            ? "text-red-600 drop-shadow-[0_0_0.8rem_#FECACA25] hover:text-red-500"
            : ""
        }
        ${
          color == "orange"
            ? "text-orange-600 drop-shadow-[0_0_0.8rem_#FFEDD525] hover:text-orange-500"
            : ""
        }
        ${
          color == "amber"
            ? "text-amber-600 drop-shadow-[0_0_0.8rem_#FEF3C725] hover:text-amber-500"
            : ""
        }
        ${
          color == "lime"
            ? "text-lime-600 drop-shadow-[0_0_0.8rem_#ECFCCB25] hover:text-lime-500"
            : ""
        }
        ${
          color == "green"
            ? "text-green-600 drop-shadow-[0_0_0.8rem_#DCFEC725] hover:text-green-500"
            : ""
        }
        ${
          color == "emerald"
            ? "text-emerald-600 drop-shadow-[0_0_0.8rem_#D1FAE525] hover:text-emerald-500"
            : ""
        }
        ${
          color == "teal"
            ? "text-teal-600 drop-shadow-[0_0_0.8rem_#CCFBF125] hover:text-teal-500"
            : ""
        }
        ${
          color == "cyan"
            ? "text-cyan-600 drop-shadow-[0_0_0.8rem_#CFFAFE25] hover:text-cyan-500"
            : ""
        }
        ${
          color == "sky"
            ? "text-sky-600 drop-shadow-[0_0_0.8rem_#E0F2FE25] hover:text-sky-500"
            : ""
        }
        ${
          color == "blue"
            ? "text-blue-600 drop-shadow-[0_0_0.8rem_#DBEAFE25] hover:text-blue-500"
            : ""
        }
        ${
          color == "indigo"
            ? "text-indigo-600 drop-shadow-[0_0_0.8rem_#E0E7FF25] hover:text-indigo-500"
            : ""
        }
        ${
          color == "violet"
            ? "text-violet-600 drop-shadow-[0_0_0.8rem_#EDE9FE25] hover:text-violet-500"
            : ""
        }
        ${
          color == "purple"
            ? "text-purple-600 drop-shadow-[0_0_0.8rem_#F3E8FF25] hover:text-purple-500"
            : ""
        }
        ${
          color == "fuchsia"
            ? "text-fuchsia-600 drop-shadow-[0_0_0.8rem_#FAE8FF25] hover:text-fuchsia-500"
            : ""
        }
        ${
          color == "pink"
            ? "text-pink-600 drop-shadow-[0_0_0.8rem_#FCE7F325] hover:text-pink-500"
            : ""
        }
        ${
          color == "rose"
            ? "text-rose-600 drop-shadow-[0_0_0.8rem_#FFE4E625] hover:text-rose-500"
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
