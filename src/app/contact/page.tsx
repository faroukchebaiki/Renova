import { ContactSection } from "@/components/contact-section";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | WF Design + Build",
  description: "Get in touch with WF Design + Build for your construction and design needs. Request a quote or consultation for your project in Vancouver, BC.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have a project in mind or questions about our services? We'd love to hear from you.
              Get in touch with our team for a consultation or quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83328.97080325602!2d-123.18452204094203!3d49.26264641978742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1657138760163!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WF Design + Build Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
