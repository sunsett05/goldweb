import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of gold do you sell?',
    answer: 'We offer a wide range of gold products including Swiss gold bars (1g to 1/2 ounce), local gold bars, gold coins (21K/22K), and pre-owned gold jewelry. All our products are certified and come with authenticity guarantees.',
  },
  {
    question: 'Are the prices on the website final?',
    answer: 'Yes, the prices displayed on our website include our commission. Prices are updated regularly based on market rates. However, final prices may vary slightly at the time of purchase due to market fluctuations.',
  },
  {
    question: 'Do you buy used gold?',
    answer: 'Yes, we buy used gold jewelry and items. We evaluate each piece based on its weight, karat, and current market price. Visit our showroom in Beirut or contact us for a valuation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash (USD), bank transfers, and other payment methods. For large transactions, we recommend contacting us in advance to arrange the most convenient payment method.',
  },
  {
    question: 'Do you deliver products?',
    answer: 'We primarily operate from our showroom in central Beirut. For certain products and locations, we may offer delivery services. Please contact us for details.',
  },
  {
    question: 'How do I verify the authenticity of your products?',
    answer: 'All our gold and silver products come with certificates of authenticity. Swiss gold bars are minted by certified refineries. We also provide assay certificates for larger purchases.',
  },
  {
    question: 'What are your working hours?',
    answer: 'We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are closed on Sundays and public holidays.',
  },
  {
    question: 'Can I invest in gold through your platform?',
    answer: 'Absolutely! We offer flexible investment solutions with minimal fees. Whether you want to buy gold bars for long-term investment or silver for portfolio diversification, we can help you find the right products.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">Find answers to common questions about our services</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-yellow-600/10 via-yellow-600/5 to-yellow-600/10 border border-yellow-600/20 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-2">Still have questions?</h2>
          <p className="text-gray-400 mb-4">Can't find what you're looking for? Contact our team.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
