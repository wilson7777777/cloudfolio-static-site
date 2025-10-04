import React from "react";

export default function ProductGrid({ products, query, category }) {
  const q = query.toLowerCase();
  const filtered = products.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
  });

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded shadow">
          <div className="font-semibold">{p.name}</div>
          <div className="text-sm text-slate-500">{p.category}</div>
          <div className="mt-2 text-lg font-bold">£{p.price}</div>
        </div>
      ))}
      {filtered.length === 0 && <div className="col-span-full text-center text-slate-500 p-6">No matching products</div>}
    </div>
  );
}
