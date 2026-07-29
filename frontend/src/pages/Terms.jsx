import React from "react";
import LegalPage from "./LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      updated="June 2026"
      intro="These terms and conditions apply to all services, quotes and agreements provided by Koodh Media Group. By using our website or working with us, you agree to the terms set out below."
      sections={[
        {
          heading: "Definitions",
          paragraphs: [
            "In these terms, \u201CKoodh Media Group\u201D, \u201Cwe\u201D or \u201Cus\u201D refers to Koodh Media Group and its team. \u201CClient\u201D, \u201Cyou\u201D refers to the natural or legal person that enters into an agreement with Koodh Media Group. \u201CServices\u201D refers to any work delivered by Koodh Media Group, including audio branding and photography.",
          ],
        },
        {
          heading: "Quotes and agreements",
          paragraphs: [
            "All quotes are non-binding and valid for 30 days unless stated otherwise. An agreement is formed once you confirm a quote in writing or once work commences with your consent.",
            "Any changes to the agreed scope may affect the timeline and price and will be communicated before being carried out.",
          ],
        },
        {
          heading: "Services and delivery",
          paragraphs: [
            "We carry out our services to the best of our ability and with the care that may reasonably be expected of a professional partner. Timelines communicated are indicative unless expressly agreed as firm deadlines.",
            "You are responsible for providing the content, access and information we need to deliver on time.",
          ],
        },
        {
          heading: "Prices and payment",
          paragraphs: [
            "All prices are exclusive of VAT unless stated otherwise. Applicable payment arrangements are always agreed upon in the quotation or project agreement before work begins.",
            "In the event of non-payment, we reserve the right to suspend ongoing work until outstanding amounts have been settled.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Upon full payment, the delivered end result is transferred to the Client, unless agreed otherwise. Koodh Media Group retains the right to use the work for portfolio and promotional purposes.",
            "Third-party components, music licences and stock remain subject to their own terms.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "Our liability is limited to the amount invoiced for the relevant assignment. We are not liable for indirect or consequential damage, including lost profits or data.",
            "We are not responsible for downtime or issues caused by third-party services outside our control.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "Both parties will treat confidential information shared during the collaboration with care and will not disclose it to third parties without consent, except where required by law.",
          ],
        },
        {
          heading: "Term and termination",
          paragraphs: [
            "Agreements can be terminated in writing subject to any agreed notice period. Work already performed and costs incurred up to the termination date remain payable.",
          ],
        },
        {
          heading: "Applicable law",
          paragraphs: [
            "These terms are governed by the laws of the country in which Koodh Media Group is established. Any disputes will be submitted to the competent court in that jurisdiction.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these terms and conditions? Reach out to us at yannick.gijbels@koodhmediagroup.com.",
          ],
        },
      ]}
    />
  );
}
