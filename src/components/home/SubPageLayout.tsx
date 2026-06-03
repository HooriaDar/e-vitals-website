import React from 'react';

interface SubPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#29003C] text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && <p className="text-xl text-[#B187E8] max-w-3xl">{description}</p>}
        </div>
      </section>
      
      {/* Page Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default SubPageLayout;