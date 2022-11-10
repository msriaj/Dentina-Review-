import React from "react";

const Blogs = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className=" md:w-8/12 bg-white rounded-md shadow flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold mb-5  sm:text-4xl text-center">
          Blogs
        </h2>

        <div className="space-y-4 pt-5 font-semibold">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Difference between SQL and NoSQL
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is JWT, and how does it work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500 dark:text-gray-400">
              What is JSON Web Token? JSON Web Token (JWT) is an open standard
              (RFC 7519) that defines a compact and self-contained way for
              securely transmitting information between parties as a JSON
              object. This information can be verified and trusted because it is
              digitally signed. JWTs can be signed using a secret (with the HMAC
              algorithm) or a public/private key pair using RSA or ECDSA.
              Although JWTs can be encrypted to also provide secrecy between
              parties, we will focus on signed tokens. Signed tokens can verify
              the integrity of the claims contained within it, while encrypted
              tokens hide those claims from other parties. When tokens are
              signed using public/private key pairs, the signature also
              certifies that only the party holding the private key is the one
              that signed it.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the difference between javascript and NodeJS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Node.js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node.js wastes no time or
              resources on waiting for I/O requests to return
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does NodeJS handle multiple requests at the same tim
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              So the thread spend most of their time using 0% CPU waiting for
              the database to return data. While doing so they have had to
              allocate the memory required for a thread which includes a
              completely separate program stack for each thread etc. Also, they
              would have to start a thread which while is not as expensive as
              starting a full process is still not exactly cheap
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
