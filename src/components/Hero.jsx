import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg p-10">
      <h1 className="text-3xl font-bold">Modern static site, infra-as-code & CI/CD</h1>
      <p className="mt-2 max-w-2xl">
        Built with React + Vite + Tailwind. Provision S3+CloudFront with Terraform and deploy via GitHub Actions.
      </p>
    </section>
  );
}
