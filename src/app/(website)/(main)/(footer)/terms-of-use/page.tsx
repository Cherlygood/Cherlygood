import Link from "next/link";
import styles from "../styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Rules, Shop Confidently",
  description:
    "Written for humans, not lawyers. Shop knowing we’ve got your back, always.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUse() {
  return (
    <div className={`min-h-screen relative`}>
      <div className="max-w-[1024px] mx-auto pt-8 pb-4 px-7">
        <div className="bg-lightgray/45 border-l-4 border-neutral-200 shadow-sm rounded-lg py-6 px-8 space-y-1">
          <h1 className="font-bold text-2xl">Terms of Use</h1>
          <p className="text-gray text-sm mt-1">Last Updated: March 10, 2025</p>
        </div>
      </div>
      <div className="pt-12 max-w-[1024px] px-[30px] mx-auto">
        <div className="w-full max-w-[736px]">
          <div className={styles.richtext}>
            <div>
              <p>
                Welcome to Cherlygood.com! These Terms of Use (“Terms”) govern
                your access to and use of our website, including any mobile
                applications or other services we provide (collectively, the
                “Sites”). By accessing or using the Sites, you agree to be bound
                by these Terms.{" "}
                <strong>
                  If you do not agree with these Terms, please do not use the
                  Sites.
                </strong>
              </p>
              <p>
                <strong>Important Note:</strong> These Terms include an
                arbitration agreement and class action waiver (see Section 13).
                By agreeing to these Terms, you waive your right to participate
                in class actions and agree to resolve disputes through
                individual arbitration. Please review Section 13 carefully.
              </p>
              <p>
                Additional terms may apply to specific features or promotions in
                the future. If there’s a conflict between these Terms and any
                additional terms, the additional terms will take precedence
                unless stated otherwise.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h2>Table of Contents</h2>
              <ol>
                <li>
                  <Link href="#1-account-registration">
                    Account Registration
                  </Link>
                </li>
                <li>
                  <Link href="#2-placing-an-order">Placing an Order</Link>
                </li>
                <li>
                  <Link href="#3-promotions">Promotions</Link>
                </li>
                <li>
                  <Link href="#4-intellectual-property">
                    Intellectual Property
                  </Link>
                </li>
                <li>
                  <Link href="#5-user-conduct">User Conduct</Link>
                </li>
                <li>
                  <Link href="#6-user-generated-content">
                    User-Generated Content
                  </Link>
                </li>
                <li>
                  <Link href="#7-third-party-links-and-content">
                    Third-Party Links and Content
                  </Link>
                </li>
                <li>
                  <Link href="#8-disclaimer-of-warranties">
                    Disclaimer of Warranties
                  </Link>
                </li>
                <li>
                  <Link href="#9-limitation-of-liability">
                    Limitation of Liability
                  </Link>
                </li>
                <li>
                  <Link href="#10-indemnification">Indemnification</Link>
                </li>
                <li>
                  <Link href="#11-termination">Termination</Link>
                </li>
                <li>
                  <Link href="#12-governing-law">Governing Law</Link>
                </li>
                <li>
                  <Link href="#13-dispute-resolution-arbitration-agreement-class-action-waiver">
                    Dispute Resolution; Arbitration Agreement; Class Action
                    Waiver
                  </Link>
                </li>
                <li>
                  <Link href="#14-changes-to-these-terms">
                    Changes to These Terms
                  </Link>
                </li>
                <li>
                  <Link href="#15-miscellaneous">Miscellaneous</Link>
                </li>
                <li>
                  <Link href="#16-contact-us">Contact Us</Link>
                </li>
              </ol>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="1-account-registration">1. Account Registration</h3>
              <p>
                To make purchases or access certain features (e.g., order
                tracking), you may need to create an account (“Account”). When
                registering, you agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information.</li>
                <li>Keep your Account credentials confidential.</li>
                <li>Be responsible for all activities under your Account.</li>
                <li>Not transfer or share your Account with others.</li>
              </ul>
              <p>
                Cherlygood.com may suspend or terminate your Account if we
                believe your information is inaccurate or if you violate these
                Terms. Notify us immediately at{" "}
                <Link href="mailto:support@cherlygood.com" target="_blank">
                  support@cherlygood.com
                </Link>{" "}
                if you suspect unauthorized use of your Account.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="2-placing-an-order">2. Placing an Order</h3>
              <h4>(a) Ordering Process</h4>
              <p>
                When you place an order, you must provide accurate payment and
                shipping details. By submitting an order, you authorize us to
                share this information with third parties (e.g., payment
                processors, shipping providers) to process your purchase.
              </p>
              <h4>(b) Product Availability and Quantities</h4>
              <p>
                All products are subject to availability. We may limit
                quantities per order and reserve the right to refuse sales to
                resellers or cancel orders suspected of resale intent.
              </p>
              <h4>(c) Pricing</h4>
              <p>
                Prices are listed in <strong>USD</strong> and may change without
                notice. If a product is listed at an incorrect price (e.g., due
                to a typo), we may cancel the order, even if confirmed, and
                refund any payment made.
              </p>
              <h4>(d) Order Confirmation</h4>
              <p>
                An order confirmation email does not mean your order is
                accepted. We reserve the right to decline any order (e.g., due
                to stock issues or suspected fraud). Acceptance occurs when we
                send a shipping confirmation.
              </p>
              <h4>(e) Payment</h4>
              <p>
                You agree to pay the total amount, including taxes and shipping
                fees, at checkout. We accept Visa, Mastercard, PayPal, and other
                methods as updated on the Sites. If payment fails, you agree to
                settle any outstanding amounts upon request.
              </p>
              <h4>(f) Taxes and Customs</h4>
              <p>
                Sales taxes will be added at checkout for applicable regions.
                For international orders, you are responsible for all customs
                duties, taxes, and fees.
              </p>
              <h4>(g) Returns and Exchanges</h4>
              <p>
                Purchases are subject to our{" "}
                <Link href="/returns-and-refunds" target="_blank">
                  Return Policy
                </Link>
                . Please review it before ordering, as it outlines conditions,
                time frames, and exceptions.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="3-promotions">3. Promotions</h3>
              <p>
                Promotions, discounts, or contests may have separate rules.
                Check those rules for eligibility and details before
                participating.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="4-intellectual-property">4. Intellectual Property</h3>
              <h4>(a) Ownership</h4>
              <p>
                All content on the Sites—like text, images, logos, and designs
                (“Materials”)—is owned by Cherlygood.com or its licensors and
                protected by copyright, trademark, and other laws. You may not
                use our Materials without our written permission.
              </p>
              <h4>(b) Limited License</h4>
              <p>
                We grant you a non-exclusive, revocable license to use the Sites
                for personal shopping purposes only. You may not:
              </p>
              <ul>
                <li>Copy or distribute Materials.</li>
                <li>Use the Sites commercially.</li>
                <li>Attempt to hack or reverse engineer the Sites.</li>
              </ul>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="5-user-conduct">5. User Conduct</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Sites illegally.</li>
                <li>Disrupt the Sites (e.g., with viruses or hacking).</li>
                <li>Commit fraud (e.g., using stolen credit cards).</li>
                <li>Harass or harm others.</li>
                <li>Post offensive or infringing content.</li>
              </ul>
              <p>We may block your access if you break these rules.</p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="6-user-generated-content">6. User-Generated Content</h3>
              <p>
                If you submit reviews, photos, or comments (“User Content”),
                you:
              </p>
              <ul>
                <li>
                  Grant Cherlygood.com a non-exclusive, royalty-free, perpetual
                  license to use, display, and share it for business purposes
                  (e.g., marketing).
                </li>
                <li>Confirm you own or have rights to the User Content.</li>
                <li>Ensure it’s legal and doesn’t violate others’ rights.</li>
              </ul>
              <p>We can remove or reject User Content at our discretion.</p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="7-third-party-links-and-content">
                7. Third-Party Links and Content
              </h3>
              <p>
                The Sites may link to external websites or feature third-party
                content. We’re not responsible for their accuracy, policies, or
                availability. Your use of third-party sites is at your own risk.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="8-disclaimer-of-warranties">
                8. Disclaimer of Warranties
              </h3>
              <p>
                The Sites and products are provided “as is” and “as available.”
                Cherlygood.com makes no warranties, express or implied,
                including about merchantability, fitness for a specific purpose,
                or non-infringement. We don’t guarantee the Sites will be
                error-free or always accessible.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="9-limitation-of-liability">9. Limitation of Liability</h3>
              <p>
                To the fullest extent allowed by law, Cherlygood.com and its
                affiliates are not liable for indirect, incidental, or
                consequential damages (e.g., lost profits) from your use of the
                Sites. Our maximum liability for any claim is limited to what
                you paid for the product or service involved.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="10-indemnification">10. Indemnification</h3>
              <p>
                You agree to defend and indemnify Cherlygood.com, its
                affiliates, and their employees against claims, damages, or
                costs (including legal fees) arising from your use of the Sites,
                violation of these Terms, or infringement of others’ rights.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="11-termination">11. Termination</h3>
              <p>
                We may suspend or terminate your access to the Sites at any
                time, with or without cause (e.g., for violating these Terms).
                You must stop using the Sites if terminated.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="12-governing-law">12. Governing Law</h3>
              <p>
                These Terms are governed by the laws of California, excluding
                its conflict of law rules.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="13-dispute-resolution-arbitration-agreement-class-action-waiver">
                13. Dispute Resolution; Arbitration Agreement; Class Action
                Waiver
              </h3>
              <p>
                <strong>
                  Read this section carefully—it impacts your legal rights.
                </strong>
              </p>
              <h4>(a) Informal Resolution</h4>
              <p>
                Before formal action, contact us at{" "}
                <Link href="mailto:legal@cherlygood.com" target="_blank">
                  legal@cherlygood.com
                </Link>{" "}
                to resolve disputes. If unresolved after 60 days, either party
                may proceed to arbitration.
              </p>
              <h4>(b) Arbitration</h4>
              <p>
                Disputes related to these Terms or the Sites will be settled by
                binding arbitration through the American Arbitration Association
                (AAA) under its Consumer Arbitration Rules, held in Los Angeles,
                California.
              </p>
              <h4>(c) Class Action Waiver</h4>
              <p>
                Disputes must be individual—you waive any right to join class
                actions or group proceedings.
              </p>
              <h4>(d) Small Claims</h4>
              <p>
                You may use small claims court instead of arbitration for
                eligible claims.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="14-changes-to-these-terms">14. Changes to These Terms</h3>
              <p>
                We may update these Terms as our business grows. Changes will be
                posted on this page, and your continued use of the Sites means
                you accept them.
              </p>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="15-miscellaneous">15. Miscellaneous</h3>
              <ul>
                <li>
                  <strong>Severability</strong>: If any part of these Terms is
                  invalid, the rest still applies.
                </li>
                <li>
                  <strong>No Waiver</strong>: Not enforcing a rule doesn’t mean
                  we waive it.
                </li>
                <li>
                  <strong>Assignment</strong>: You can’t transfer these Terms;
                  we can with notice.
                </li>
              </ul>
            </div>
            <hr className="!mb-8" />
            <div>
              <h3 id="16-contact-us">16. Contact Us</h3>
              <p>
                Got questions? Email us at{" "}
                <Link href="mailto:support@cherlygood.com" target="_blank">
                  support@cherlygood.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
