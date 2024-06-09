import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import React from "react";

const Terms = () => {
  return (
    <main>
      <BackgroundBeams className="z-[-1]" />

      <div className="flex flex-col gap-10 mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold mb-4 ">Terms and Conditions</h1>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Introduction
          </h2>
          <p className="text-lg">
            Welcome to TheAffiliate.io. These terms and conditions outline the
            rules and regulations for the use of our website.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Acceptance of Terms
          </h2>
          <p className="text-lg">
            By accessing this website, you accept these terms and conditions in
            full. If you disagree with any part of these terms, you must not use
            this website.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Intellectual Property
          </h2>
          <p className="text-lg">
            The content on TheAffiliate.io, including text, graphics, logos, and
            software, is the property of TheAffiliate.io and is protected by
            intellectual property laws.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            User Obligations
          </h2>
          <p className="text-lg">
            You must use the website for lawful purposes. You must not misuse
            our website by introducing viruses or other malicious material.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Privacy Policy
          </h2>
          <p className="text-lg">
            Your use of the website is also governed by our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Limitation of Liability
          </h2>
          <p className="text-lg">
            TheAffiliate.io will not be liable for any damages arising from the
            use or inability to use the website.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Changes to Terms
          </h2>
          <p className="text-lg">
            TheAffiliate.io reserves the right to revise these terms at any
            time. By using this website, you are expected to review these terms
            regularly.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Governing Law
          </h2>
          <p className="text-lg">
            These terms are governed by and construed in accordance with the
            laws of the jurisdiction in which TheAffiliate.io operates.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className="text-3xl font-semibold mb-2 
"
          >
            Contact Us
          </h2>
          <p className="text-lg">
            For any questions about these terms, please contact us at
            shrit1401@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
};

export default Terms;
