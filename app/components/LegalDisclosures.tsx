"use client";

export default function LegalDisclosures() {
    return (
        <section className="w-full bg-white py-12 border-t border-gray-100">
            <div className="max-w-[1240px] mx-auto px-6 text-gray-500 text-[11px] md:text-[13px] leading-relaxed font-normal space-y-6">
                <div className="space-y-4">
                    <p>View state licenses and notices.</p>
                    <p>New Jersey residents: This is an advertisement for a consumer loan.</p>
                    <p>
                        New Mexico residents: TO REPORT A PROBLEM OR COMPLAINT WITH THIS LENDER, YOU MAY WRITE OR CALL: Customer Experience – Contact Manager,
                        Oportun, PO Box 4085, Menlo Park, CA 94026; 888-408-3020; Complaints@oportun.com. This lender is licensed and regulated by the New Mexico Regulation
                        and Licensing Department, Financial Institutions Division, PO Box 25101, 2550 Cerrillos Road, Santa Fe, New Mexico 87504. To report any unresolved problems
                        or complaints, contact the division by telephone at 505-476-4885 or visit the website
                    </p>
                    <p>NMLS #1671904. View the NMLS Consumer Access Database .</p>
                </div>

                {/* Website Terms & Policies */}
                <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <p>
                        Oportun's website terms, privacy, and security policies don't apply to outside sites we reference. Please review those websites for their terms, privacy, and
                        security policies to see how they apply to you. Oportun isn't responsible for (and doesn't provide) any products, services or content at this third-party site or app,
                        except for products and services that explicitly carry our name.
                    </p>
                </div>

                {/* Personal Loans Information */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-gray-700 text-sm">Personal loans information</h4>
                    <p>
                        Lender information: Personal loans in NM and WI are originated by Oportun Inc. Personal loans in AL, AK, AR, AZ, CA, DE, FL, GA, HI, ID, IL, IN, KS, KY, LA, MI,
                        MN, MO, MS, MT, NC, ND, NE, NH, NJ, NV, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, and WY are originated by Pathward<sup>®</sup>, N.A. THIS IS A LOAN
                        SOLICITATION ONLY. OPORTUN MAY NOT BE THE LENDER. INFORMATION RECEIVED WILL BE SHARED WITH PATHWARD IN CONNECTION WITH YOUR
                        LOAN INQUIRY. THE LENDER MAY NOT BE SUBJECT TO ALL VERMONT OR OTHER STATE LENDING LAWS. THE LENDER MAY BE SUBJECT TO FEDERAL
                        LENDING LAWS.
                    </p>

                    <p>
                        Product Terms: Lending products are subject to credit approval. Terms may vary by applicant and state and are subject to change. While a prior credit history is
                        not required to qualify, credit reports will be requested and considered for all applicants. Account payment history is reported to select nationwide credit
                        bureaus. Prequalification will not impact your credit score with the nationwide credit reporting agencies until you submit for final approval. Typical personal
                        loan amounts are $500 to $5,000 for new customers, $1,500 to$9,100 for returning customers, and secured personal loan amounts are $3,600 to $12,300, based
                        on information from previously approved loans which may not represent current terms.
                    </p>

                    <p>
                        Pricing information: Amounts financed for unsecured personal loans vary by state: amounts above $6,000 are not available for first-time borrowers; amounts
                        below $3,100 are not available in GA; and amounts below $1,600 are not available in HI. A secured personal loan with an amount financed from $2,525 to
                        $18,500 is only offered through the personal loan application to qualifying customers in select states from Pathward®, N.A. subject to certain terms and
                        conditions. Loans are subject to an administrative fee of up to 10% of principal amount. You may incur a lower administrative fee, based on loan size and term
                        length. For example, for an unsecured personal loan with a principal amount of $3,333, a term of 30 months, a 10% administrative fee of $333, an APR of
                        35.95%, the borrower will receive $3,000 and make 65 payments of $70, due every 2 weeks. For example, for a secured personal loan with a principal amount of $7,778
                        for a term of 39 months, a 10% administrative fee of $778, and an APR of 34.95%, the borrower will receive $7,000 and make 84 payments of $140 , due every 2
                        weeks.
                    </p>

                    <p>Secured personal loans are available for residents of: Arizona, California, Florida, Illinois, Nevada, New Jersey, Texas and Utah.</p>
                </div>

                {/* General Disclosures */}
                <div className="space-y-4">
                    <p>
                        Oportun is a financial technology company, not an FDIC-insured bank. However, Oportun holds your deposits in accounts established by Oportun at Wells Fargo
                        Bank, N.A., JPMorgan Chase Bank, N.A., and/or Citibank, N.A., Members FDIC (collectively, the “Depository Institutions”). Those deposits are eligible for FDIC-
                        insurance on a pass-through basis up to $250,000 in the aggregate with any other deposits you hold at a given Depository Institution. Certain conditions must be
                        satisfied for pass-through deposit insurance coverage to apply. Deposit insurance only covers the failure of a Depository Institution.
                    </p>
                    <p>Customer recommendation based on member survey updated quarterly. 9 out of 10 is based on loan members.</p>
                    <p>Google and Trustpilot reviews are solicited from credit customers only. Google rating is currently based on all Oportun store locations.</p>
                    <p>* Member savings based on average saves of all paying app members in the prior 12 months. Not a guarantee; results will vary based on your income and spending.</p>
                    <p>
                        Community partners like SpringFour and UnidosUS are not affiliates or agents of Oportun, Inc. or its affiliates. Community partners are optional services and are not
                        partner bank services through Pathward, N.A.. Oportun is not responsible for any third-party content and opinions provided by community partners.
                    </p>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-100">
                    <p>© 2026 Cashinflash, Inc. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
