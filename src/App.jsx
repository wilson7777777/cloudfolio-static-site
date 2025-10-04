import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

const sampleProducts = [
  { id: 1, name: "EdgeRouter Pro", category: "Networking", price: 129 },
  { id: 2, name: "Infra Monitor", category: "Monitoring", price: 59 },
  { id: 3, name: "Deploy Studio", category: "CI/CD", price: 199 },
  { id: 4, name: "KubeSafe", category: "Kubernetes", price: 79 }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <Hero />
        <section className="mt-6">
          <div className="flex gap-4 items-center">
            <input
              aria-label="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Search products..."
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded"
            >
              <option>All</option>
              <option>Networking</option>
              <option>Monitoring</option>
              <option>CI/CD</option>
              <option>Kubernetes</option>
            </select>
          </div>

          <ProductGrid
            products={sampleProducts}
            query={query}
            category={category}
          />
        </section>
      </main>
    </div>
  );
}

