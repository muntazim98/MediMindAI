import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Trusted <span className="text-blue-600">AI Medical Assistant</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          MediMind helps you understand medical information using trusted
          documents. Ask questions, explore knowledge, and stay informed —
          without diagnosis or prescriptions.
        </p>

        <Link
          to="/chat"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-blue-700 transition shadow-lg"
        >
          Start Chatting
        </Link>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Document-Based Answers"
          description="Responses are generated strictly from verified medical documents using advanced retrieval techniques."
        />
        <FeatureCard
          title="No Guesswork"
          description="If the answer is not available in the documents, MediMind clearly tells you it doesn’t know."
        />
        <FeatureCard
          title="Clear & Concise"
          description="Answers are short, focused, and easy to understand — designed for clarity, not confusion."
        />
      </section>

      {/* SAFETY SECTION */}
      <section className="bg-white border-t border-b">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Built with Safety in Mind
          </h2>
          <p className="text-gray-600 leading-relaxed">
            MediMind does not provide medical diagnoses or treatment advice.
            It is designed to assist with understanding medical information
            and should always be used alongside professional medical guidance.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to explore medical knowledge?
        </h2>

        <Link
          to="/chat"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition"
        >
          Go to Chat
        </Link>
      </section>
    </div>
  );
}

/* Feature Card Component */
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
