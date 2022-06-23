import React from "react";

/*
 Giving up on trying to get all the colors name automatically. Definitely a possible improvement.
const colors = require("tailwindcss/colors");

export default function TextHelper() {
  return (
    <div>
      {Object.keys(colors).map((name) => {
        if (
          typeof colors[name] != "string" &&
          name != "lightBlue" &&
          name != "warmGray" &&
          name != "trueGray" &&
          name != "coolGray" &&
          name != "blueGray"
        ) {
          const className = "text-"+name+"-500"
          return (
          <p className={className}>{name}</p>
          );
        }
      })}
    </div>
  );
};

*/

export default function TextHelper() {
  return (
    <div className="grid grid-flow-row gap-10">
      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">Slate</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-slate-50">text-slate-50</p>
          <p className="w-20 text-slate-100">text-slate-100</p>
          <p className="w-20 text-slate-200">text-slate-200</p>
          <p className="w-20 text-slate-300">text-slate-300</p>
          <p className="w-20 text-slate-400">text-slate-400</p>
          <p className="w-20 text-slate-500">text-slate-500</p>
          <p className="w-20 text-slate-600">text-slate-600</p>
          <p className="w-20 text-slate-700">text-slate-700</p>
          <p className="w-20 text-slate-800">text-slate-800</p>
          <p className="w-20 text-slate-900">text-slate-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">gray</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-gray-50">text-gray-50</p>
          <p className="w-20 text-gray-100">text-gray-100</p>
          <p className="w-20 text-gray-200">text-gray-200</p>
          <p className="w-20 text-gray-300">text-gray-300</p>
          <p className="w-20 text-gray-400">text-gray-400</p>
          <p className="w-20 text-gray-500">text-gray-500</p>
          <p className="w-20 text-gray-600">text-gray-600</p>
          <p className="w-20 text-gray-700">text-gray-700</p>
          <p className="w-20 text-gray-800">text-gray-800</p>
          <p className="w-20 text-gray-900">text-gray-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">zinc</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-zinc-50">text-zinc-50</p>
          <p className="w-20 text-zinc-100">text-zinc-100</p>
          <p className="w-20 text-zinc-200">text-zinc-200</p>
          <p className="w-20 text-zinc-300">text-zinc-300</p>
          <p className="w-20 text-zinc-400">text-zinc-400</p>
          <p className="w-20 text-zinc-500">text-zinc-500</p>
          <p className="w-20 text-zinc-600">text-zinc-600</p>
          <p className="w-20 text-zinc-700">text-zinc-700</p>
          <p className="w-20 text-zinc-800">text-zinc-800</p>
          <p className="w-20 text-zinc-900">text-zinc-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">neutral</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-neutral-50">text-neutral-50</p>
          <p className="w-20 text-neutral-100">text-neutral-100</p>
          <p className="w-20 text-neutral-200">text-neutral-200</p>
          <p className="w-20 text-neutral-300">text-neutral-300</p>
          <p className="w-20 text-neutral-400">text-neutral-400</p>
          <p className="w-20 text-neutral-500">text-neutral-500</p>
          <p className="w-20 text-neutral-600">text-neutral-600</p>
          <p className="w-20 text-neutral-700">text-neutral-700</p>
          <p className="w-20 text-neutral-800">text-neutral-800</p>
          <p className="w-20 text-neutral-900">text-neutral-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">stone</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-stone-50">text-stone-50</p>
          <p className="w-20 text-stone-100">text-stone-100</p>
          <p className="w-20 text-stone-200">text-stone-200</p>
          <p className="w-20 text-stone-300">text-stone-300</p>
          <p className="w-20 text-stone-400">text-stone-400</p>
          <p className="w-20 text-stone-500">text-stone-500</p>
          <p className="w-20 text-stone-600">text-stone-600</p>
          <p className="w-20 text-stone-700">text-stone-700</p>
          <p className="w-20 text-stone-800">text-stone-800</p>
          <p className="w-20 text-stone-900">text-stone-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">red</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-red-50">text-red-50</p>
          <p className="w-20 text-red-100">text-red-100</p>
          <p className="w-20 text-red-200">text-red-200</p>
          <p className="w-20 text-red-300">text-red-300</p>
          <p className="w-20 text-red-400">text-red-400</p>
          <p className="w-20 text-red-500">text-red-500</p>
          <p className="w-20 text-red-600">text-red-600</p>
          <p className="w-20 text-red-700">text-red-700</p>
          <p className="w-20 text-red-800">text-red-800</p>
          <p className="w-20 text-red-900">text-red-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">orange</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-orange-50">text-orange-50</p>
          <p className="w-20 text-orange-100">text-orange-100</p>
          <p className="w-20 text-orange-200">text-orange-200</p>
          <p className="w-20 text-orange-300">text-orange-300</p>
          <p className="w-20 text-orange-400">text-orange-400</p>
          <p className="w-20 text-orange-500">text-orange-500</p>
          <p className="w-20 text-orange-600">text-orange-600</p>
          <p className="w-20 text-orange-700">text-orange-700</p>
          <p className="w-20 text-orange-800">text-orange-800</p>
          <p className="w-20 text-orange-900">text-orange-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">amber</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-amber-50">text-amber-50</p>
          <p className="w-20 text-amber-100">text-amber-100</p>
          <p className="w-20 text-amber-200">text-amber-200</p>
          <p className="w-20 text-amber-300">text-amber-300</p>
          <p className="w-20 text-amber-400">text-amber-400</p>
          <p className="w-20 text-amber-500">text-amber-500</p>
          <p className="w-20 text-amber-600">text-amber-600</p>
          <p className="w-20 text-amber-700">text-amber-700</p>
          <p className="w-20 text-amber-800">text-amber-800</p>
          <p className="w-20 text-amber-900">text-amber-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">yellow</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-yellow-50">text-yellow-50</p>
          <p className="w-20 text-yellow-100">text-yellow-100</p>
          <p className="w-20 text-yellow-200">text-yellow-200</p>
          <p className="w-20 text-yellow-300">text-yellow-300</p>
          <p className="w-20 text-yellow-400">text-yellow-400</p>
          <p className="w-20 text-yellow-500">text-yellow-500</p>
          <p className="w-20 text-yellow-600">text-yellow-600</p>
          <p className="w-20 text-yellow-700">text-yellow-700</p>
          <p className="w-20 text-yellow-800">text-yellow-800</p>
          <p className="w-20 text-yellow-900">text-yellow-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">lime</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-lime-50">text-lime-50</p>
          <p className="w-20 text-lime-100">text-lime-100</p>
          <p className="w-20 text-lime-200">text-lime-200</p>
          <p className="w-20 text-lime-300">text-lime-300</p>
          <p className="w-20 text-lime-400">text-lime-400</p>
          <p className="w-20 text-lime-500">text-lime-500</p>
          <p className="w-20 text-lime-600">text-lime-600</p>
          <p className="w-20 text-lime-700">text-lime-700</p>
          <p className="w-20 text-lime-800">text-lime-800</p>
          <p className="w-20 text-lime-900">text-lime-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">green</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-green-50">text-green-50</p>
          <p className="w-20 text-green-100">text-green-100</p>
          <p className="w-20 text-green-200">text-green-200</p>
          <p className="w-20 text-green-300">text-green-300</p>
          <p className="w-20 text-green-400">text-green-400</p>
          <p className="w-20 text-green-500">text-green-500</p>
          <p className="w-20 text-green-600">text-green-600</p>
          <p className="w-20 text-green-700">text-green-700</p>
          <p className="w-20 text-green-800">text-green-800</p>
          <p className="w-20 text-green-900">text-green-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">emerald</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-emerald-50">text-emerald-50</p>
          <p className="w-20 text-emerald-100">text-emerald-100</p>
          <p className="w-20 text-emerald-200">text-emerald-200</p>
          <p className="w-20 text-emerald-300">text-emerald-300</p>
          <p className="w-20 text-emerald-400">text-emerald-400</p>
          <p className="w-20 text-emerald-500">text-emerald-500</p>
          <p className="w-20 text-emerald-600">text-emerald-600</p>
          <p className="w-20 text-emerald-700">text-emerald-700</p>
          <p className="w-20 text-emerald-800">text-emerald-800</p>
          <p className="w-20 text-emerald-900">text-emerald-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">teal</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-teal-50">text-teal-50</p>
          <p className="w-20 text-teal-100">text-teal-100</p>
          <p className="w-20 text-teal-200">text-teal-200</p>
          <p className="w-20 text-teal-300">text-teal-300</p>
          <p className="w-20 text-teal-400">text-teal-400</p>
          <p className="w-20 text-teal-500">text-teal-500</p>
          <p className="w-20 text-teal-600">text-teal-600</p>
          <p className="w-20 text-teal-700">text-teal-700</p>
          <p className="w-20 text-teal-800">text-teal-800</p>
          <p className="w-20 text-teal-900">text-teal-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">cyan</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-cyan-50">text-cyan-50</p>
          <p className="w-20 text-cyan-100">text-cyan-100</p>
          <p className="w-20 text-cyan-200">text-cyan-200</p>
          <p className="w-20 text-cyan-300">text-cyan-300</p>
          <p className="w-20 text-cyan-400">text-cyan-400</p>
          <p className="w-20 text-cyan-500">text-cyan-500</p>
          <p className="w-20 text-cyan-600">text-cyan-600</p>
          <p className="w-20 text-cyan-700">text-cyan-700</p>
          <p className="w-20 text-cyan-800">text-cyan-800</p>
          <p className="w-20 text-cyan-900">text-cyan-900</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">sky</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-sky-50">text-sky-50</p>
          <p className="w-20 text-sky-100">text-sky-100</p>
          <p className="w-20 text-sky-200">text-sky-200</p>
          <p className="w-20 text-sky-300">text-sky-300</p>
          <p className="w-20 text-sky-400">text-sky-400</p>
          <p className="w-20 text-sky-500">text-sky-500</p>
          <p className="w-20 text-sky-600">text-sky-600</p>
          <p className="w-20 text-sky-700">text-sky-700</p>
          <p className="w-20 text-sky-800">text-sky-800</p>
          <p className="w-20 text-sky-900">text-sky-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">blue</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-blue-50">text-blue-50</p>
          <p className="w-20 text-blue-100">text-blue-100</p>
          <p className="w-20 text-blue-200">text-blue-200</p>
          <p className="w-20 text-blue-300">text-blue-300</p>
          <p className="w-20 text-blue-400">text-blue-400</p>
          <p className="w-20 text-blue-500">text-blue-500</p>
          <p className="w-20 text-blue-600">text-blue-600</p>
          <p className="w-20 text-blue-700">text-blue-700</p>
          <p className="w-20 text-blue-800">text-blue-800</p>
          <p className="w-20 text-blue-900">text-blue-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">indigo</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-indigo-50">text-indigo-50</p>
          <p className="w-20 text-indigo-100">text-indigo-100</p>
          <p className="w-20 text-indigo-200">text-indigo-200</p>
          <p className="w-20 text-indigo-300">text-indigo-300</p>
          <p className="w-20 text-indigo-400">text-indigo-400</p>
          <p className="w-20 text-indigo-500">text-indigo-500</p>
          <p className="w-20 text-indigo-600">text-indigo-600</p>
          <p className="w-20 text-indigo-700">text-indigo-700</p>
          <p className="w-20 text-indigo-800">text-indigo-800</p>
          <p className="w-20 text-indigo-900">text-indigo-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">violet</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-violet-50">text-violet-50</p>
          <p className="w-20 text-violet-100">text-violet-100</p>
          <p className="w-20 text-violet-200">text-violet-200</p>
          <p className="w-20 text-violet-300">text-violet-300</p>
          <p className="w-20 text-violet-400">text-violet-400</p>
          <p className="w-20 text-violet-500">text-violet-500</p>
          <p className="w-20 text-violet-600">text-violet-600</p>
          <p className="w-20 text-violet-700">text-violet-700</p>
          <p className="w-20 text-violet-800">text-violet-800</p>
          <p className="w-20 text-violet-900">text-violet-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">purple</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-purple-50">text-purple-50</p>
          <p className="w-20 text-purple-100">text-purple-100</p>
          <p className="w-20 text-purple-200">text-purple-200</p>
          <p className="w-20 text-purple-300">text-purple-300</p>
          <p className="w-20 text-purple-400">text-purple-400</p>
          <p className="w-20 text-purple-500">text-purple-500</p>
          <p className="w-20 text-purple-600">text-purple-600</p>
          <p className="w-20 text-purple-700">text-purple-700</p>
          <p className="w-20 text-purple-800">text-purple-800</p>
          <p className="w-20 text-purple-900">text-purple-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">fuchsia</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-fuchsia-50">text-fuchsia-50</p>
          <p className="w-20 text-fuchsia-100">text-fuchsia-100</p>
          <p className="w-20 text-fuchsia-200">text-fuchsia-200</p>
          <p className="w-20 text-fuchsia-300">text-fuchsia-300</p>
          <p className="w-20 text-fuchsia-400">text-fuchsia-400</p>
          <p className="w-20 text-fuchsia-500">text-fuchsia-500</p>
          <p className="w-20 text-fuchsia-600">text-fuchsia-600</p>
          <p className="w-20 text-fuchsia-700">text-fuchsia-700</p>
          <p className="w-20 text-fuchsia-800">text-fuchsia-800</p>
          <p className="w-20 text-fuchsia-900">text-fuchsia-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">pink</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-pink-50">text-pink-50</p>
          <p className="w-20 text-pink-100">text-pink-100</p>
          <p className="w-20 text-pink-200">text-pink-200</p>
          <p className="w-20 text-pink-300">text-pink-300</p>
          <p className="w-20 text-pink-400">text-pink-400</p>
          <p className="w-20 text-pink-500">text-pink-500</p>
          <p className="w-20 text-pink-600">text-pink-600</p>
          <p className="w-20 text-pink-700">text-pink-700</p>
          <p className="w-20 text-pink-800">text-pink-800</p>
          <p className="w-20 text-pink-900">text-pink-900</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-12">
          <h3 className="font-bold">rose</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p className="w-20 text-rose-50">text-rose-50</p>
          <p className="w-20 text-rose-100">text-rose-100</p>
          <p className="w-20 text-rose-200">text-rose-200</p>
          <p className="w-20 text-rose-300">text-rose-300</p>
          <p className="w-20 text-rose-400">text-rose-400</p>
          <p className="w-20 text-rose-500">text-rose-500</p>
          <p className="w-20 text-rose-600">text-rose-600</p>
          <p className="w-20 text-rose-700">text-rose-700</p>
          <p className="w-20 text-rose-800">text-rose-800</p>
          <p className="w-20 text-rose-900">text-rose-900</p>
        </div>
      </div>
    </div>
  );
}