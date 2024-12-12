import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CustomFaqSection = () => {
  const faqs = [
    {
      question: "What's the average settlement payout?",
      answer: "The potential settlement amount in a hair relaxer uterine cancer lawsuit can vary significantly depending on several factors. However, most average settlements for uterine cancer caused by hair relaxer lawsuits are estimated to be between $100,000 and $2 million."
    },
    {
      question: "Which hair straightener brands are part of this?",
      answer: "All major chemical hair relaxer brands are included, like Dark & Lovely, Just For Me, Motions, TCB Naturals, Olive Oil Relaxer, and African Pride. You don't need to remember exact brands - we'll help figure that out."
    },
    {
      question: "What health problems make me eligible?",
      answer: "You might have a case if you got uterine cancer, ovarian cancer, uterine fibroids, or endometriosis after using chemical hair straighteners. Other health issues may qualify too - just ask us to check."
    },
    {
      question: "Do I need to pay anything upfront?",
      answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
    },
    {
      question: "What if I don't have old receipts?",
      answer: "Don't worry about receipts. We can use other proof like photos of you with straightened hair, statements from family or your hairstylist, or even old social media posts."
    },
    {
      question: "How long does it take to get money?",
      answer: "Most people get their money within 8-14 months. Some cases settle faster, others might take longer. We'll keep you updated every step of the way."
    },
    {
      question: "Will this affect my privacy?",
      answer: "We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."
    },
    {
      question: "What if I'm not sure I have a case?",
      answer: "Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your hair straightener use and health. There's no commitment to file a case."
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-800">
          Common Questions
        </h2>
        <p className="text-center mb-8 text-slate-600 max-w-2xl mx-auto">
          Quick answers about getting compensation for your hair straightener injuries
        </p>
        
        <div className="overflow-x-hidden">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-3"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-xl bg-white shadow-sm data-[state=open]:shadow-md data-[state=open]:bg-blue-50 transition-all duration-200 border border-slate-100 overflow-hidden"
              >
                <AccordionTrigger 
                  className="flex w-full px-6 py-4 text-lg text-slate-800 font-medium [&[data-state=open]>span]:text-blue-600"
                >
                  <span className="text-left flex-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Have more questions? Our team is here to help 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomFaqSection;
