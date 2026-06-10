'use client';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src="/assets/blog1.jpg"
          alt="Optimizing RPM Programs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <p className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Remote Patient Monitoring
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Optimizing RPM Programs for Better Outcomes
          </h1>
          <p className="text-white/80 mt-4">Aug 10, 2025</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p className="text-lg leading-relaxed">
          Remote Patient Monitoring (RPM) programs have revolutionized the way healthcare providers
          manage patient care. By leveraging connected devices, clinicians can track vital signs,
          medication adherence, and overall health trends from the comfort of the patients home.
        </p>

        <h2 className="text-2xl font-bold text-purple-800">Key Benefits of RPM Programs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Continuous monitoring of patient health outside clinical settings.</li>
          <li>Early detection of potential complications and risk factors.</li>
          <li>Improved patient engagement and adherence to treatment plans.</li>
          <li>Reduced hospital readmissions and ER visits.</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-800">Strategies for Optimization</h2>
        <p className="text-gray-700 leading-relaxed">
          Successful RPM programs are built on clear protocols, patient education, and seamless
          integration with clinical workflows. Here are some strategies to optimize outcomes:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Device Selection:</strong> Choose reliable devices that are easy for patients
            to use and integrate automatically with the monitoring platform.
          </li>
          <li>
            <strong>Patient Training:</strong> Provide comprehensive onboarding so patients understand
            how to use devices correctly and consistently.
          </li>
          <li>
            <strong>Data Analysis:</strong> Use analytics to identify trends, high-risk patients, and
            actionable insights for timely interventions.
          </li>
          <li>
            <strong>Clinical Integration:</strong> Ensure RPM data integrates smoothly with EHRs and
            existing clinical workflows for faster decision-making.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-purple-800">Measuring Success</h2>
        <p className="text-gray-700 leading-relaxed">
          To measure the effectiveness of RPM programs, monitor metrics like patient engagement,
          adherence rates, readmission rates, and overall clinical outcomes. Continuous
          improvement based on these insights ensures programs deliver maximum value.
        </p>

        <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600">
          “RPM programs empower patients and providers alike, transforming healthcare from reactive
          to proactive.”
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
          By optimizing RPM programs, healthcare organizations can enhance patient satisfaction,
          improve health outcomes, and reduce costs—all while providing personalized, real-time
          care.
        </p>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
