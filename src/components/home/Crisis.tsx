"use client";
import React from "react";
const RpmOverviewSection: React.FC = () => {

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* The Crisis */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            The Crisis: Why Remote Patient Monitoring (RPM) is Essential for
            Chronic Care Management
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            The escalating chronic disease crisis affects nearly 75% of American
            adults, driving up healthcare costs, provider burnout, and care
            gaps. Effective, HIPAA-compliant Remote Patient Monitoring (RPM)
            streamlines chronic care management, simplifies RPM CPT codes, and
            maximizes Medicare reimbursement for proactive, profitable medicine.
          </p>
        </div>

        {/* RPM That Pays */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            RPM That Pays: Elevating Chronic Care and Maximizing Reimbursement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Optimized Reimbursement",
                desc: "Maximize Medicare reimbursement for RPM CPT codes (99453, 99454) with streamlined billing workflows, ensuring financial sustainability and high capture rates in remote patient monitoring.",
              },
              {
                title: "Seamless Technology",
                desc: "Integrate HIPAA-compliant RPM software with EMR/EHR for real-time vital sign data from connected devices, reducing administrative friction and provider burnout in chronic care management.",
              },
              {
                title: "Superior Patient Outcomes",
                desc: "Enable proactive interventions for hypertension and diabetes via RPM, improving patient adherence, reducing acute incidents, and supporting value-based care models.",
              },
              {
                title: "Clinical Support",
                desc: "Scale RPM programs with dedicated managed services as an extension of your staff, handling logistics and monitoring to minimize hiring and overhead in chronic care.",
              },
              {
                title: "Data & Compliance",
                desc: "Rely on secure, HIPAA-compliant cloud-based RPM for patient vitals monitoring, staying ahead of regulations to focus on care without compliance worries.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100"
              >
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default RpmOverviewSection;
