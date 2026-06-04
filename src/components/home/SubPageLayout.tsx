"use client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/motion";

interface SubPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  imageSrc?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({
  children,
  title,
  description,
  imageSrc,
}) => {
  return (
    <>
      <PageHero
        title={title}
        description={description}
        imageSrc={imageSrc}
        imageAlt=""
        variant="light"
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <Reveal className="container mx-auto max-w-7xl">
          {children}
        </Reveal>
      </div>
    </>
  );
};

export default SubPageLayout;
