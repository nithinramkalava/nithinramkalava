import { Metadata } from 'next';
import ContactPageClient from './client-page';

export const metadata: Metadata = {
  title: "Contact - Nithin Ram Kalava",
  description: "Get in touch with Nithin Ram Kalava for collaboration opportunities, project inquiries, or any questions about my work.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}