import React from "react";
import LegalPage from "./LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy & Cookie Policy"
      path="/privacy"
      updated="June 2026"
      intro="Koodh Media Group respects your privacy. This policy explains what personal data we collect, why we collect it, and how we use cookies on our website."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Koodh Media Group creates audio branding and photography. For any privacy-related questions you can contact us at yannick.gijbels@koodhmediagroup.com.",
          ],
        },
        {
          heading: "Data we collect",
          paragraphs: [
            "We only collect data that is necessary to provide and improve our services. This may include:",
          ],
          list: [
            "Contact details you share when you email us (name, email address, message).",
            "Technical data such as your IP address, browser type and device information.",
            "Usage data about how you interact with our website, if you allow analytics cookies.",
          ],
        },
        {
          heading: "How we use your data",
          paragraphs: [
            "We use your data to respond to your enquiries, to deliver our services, to improve our website, and to comply with legal obligations. We never sell your personal data to third parties.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Cookies are small text files stored on your device. We use different categories of cookies:",
          ],
          list: [
            "Strictly necessary cookies \u2014 required for the website to function. Always active.",
            "Analytics cookies \u2014 help us understand how visitors use the site. Only set with your consent.",
            "Marketing cookies \u2014 used to personalise content and ads. Only set with your consent.",
          ],
        },
        {
          heading: "Managing your consent",
          paragraphs: [
            "When you first visit our website, you can accept, decline or customise your cookie preferences. You can change your choice at any time using the \u201CCookie settings\u201D link in the footer.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You have the right to access, correct or delete your personal data, and to object to or restrict its processing. To exercise these rights, contact us at yannick.gijbels@koodhmediagroup.com.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "We keep your personal data only for as long as necessary for the purposes described in this policy or as required by law.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. The latest version will always be available on this page.",
          ],
        },
      ]}
    />
  );
}
