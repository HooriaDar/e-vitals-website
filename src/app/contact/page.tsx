import ContactFormWrapper from "../../components/home/ContactFormWrapper";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactFormWrapper />
    </Suspense>
  );
}
