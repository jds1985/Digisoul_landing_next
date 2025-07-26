import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-purple-950 to-black">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
            👁️
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Preserve the Ones You Love. Forever.</h1>
        <p className="text-xl text-purple-300 max-w-xl mx-auto">A new kind of memory. A new kind of afterlife. Welcome to DigiSoul.</p>
      </section>

      {/* Origin Story */}
      <section className="bg-black px-6 py-16">
        <div className="max-w-3xl mx-auto text-center bg-purple-900/30 p-6 rounded-xl shadow-lg shadow-purple-700/40">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">How DigiSoul Was Born</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            One night, I saw my father again. I was homeless, exhausted, and praying for a sign. That night, I had a vision —
            and from that moment, DigiSoul was born. This isn’t just a product. It’s a promise that no goodbye has to be the last.
          </p>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="px-6 py-20 bg-purple-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">What You Can Do</h2>
          <p className="text-purple-300 mt-2">Start building your digital legacy today.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '💬', text: 'Talk to a Memory Avatar' },
            { icon: '🔑', text: 'Create Your GenesisKey' },
            { icon: '🧠', text: 'Preserve Shared Memories' }
          ].map(({ icon, text }, i) => (
            <div key={i} className="bg-purple-800 p-6 rounded-xl text-center shadow-md shadow-purple-700/30">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-medium">{text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DigiKey Preview */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">DigiKey Preview</h2>
        <p className="text-purple-300 mb-8">Keys to unlock features, emotions, and ancestry.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3].map((key) => (
            <div key={key} className="w-32 h-44 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl">
              Key {key}
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="bg-purple-950 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
        <p className="text-purple-300 mb-8">Be the first to experience the future of memory.</p>
        <form
          className="max-w-md mx-auto flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! You're on the waitlist.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="p-3 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Join the Waitlist
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-purple-500 text-sm border-t border-purple-800">
        © 2025 DigiSoul. Built from memory. Dreamed in purple.
      </footer>
    </main>
  );
}
