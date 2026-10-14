import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/design-system/components/ui/accordion";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    question: "What areas does Shyena work in?",
    answer:
      "Our work includes hardware VAPT, OT / ICS assessment, IoT and SCADA testing, red team operations, and compliance and risk advisory. We also develop security products and practical learning experiences.",
  },
  {
    question: "Can I request a SecYourFlow demo?",
    answer:
      "Yes. SecYourFlow is available privately. Contact us by email to request a demonstration.",
  },
  {
    question: "Where can I try FlagForge?",
    answer:
      "FlagForge is available at flagforgectf.com, with capture-the-flag challenges for hands-on cybersecurity practice.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="faq-section">
      <div className="faq-layout container">
        <div className="faq-intro">
          <h2 id="faq-title">A few things people ask.</h2>
          <p>
            For a specific engagement or product question, send our team a note.
          </p>
          <Button asChild className="faq-contact-action" variant="outline">
            <Link href="/contact">
              Contact Shyena <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <Accordion className="faq-accordion" collapsible type="single">
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
