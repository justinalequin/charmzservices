import React from "react";
import Layout from "../layout/Layout";

function Services() {
  return (
    <Layout>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "5vh",
              fontFamily: "bitter",
              fontWeight: "bold",
            }}
          >
            Our Services
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "2.5vh",
              fontFamily: "bitter",
              fontWeight: "bold",
              textAlign: "center",
              width: "80vw",
              margin: "auto",
            }}
          >
            Notaries Public in Florida have the authority to take
            acknowledgments, administer oaths, solemnize marriage, certify the
            contents of a safe-deposit box, certify the Vehicle Identification
            Number of a motor vehicle, and certify copies of documents which are
            not public records.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "75vw",
            }}
          >
            <ul
              style={{
                fontFamily: "bitter",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li>
                <p style={{ fontWeight: "bold" }}>Acknowledgments</p>
                <p>
                  Acknowledgments are usually taken in correlation with a real
                  estate transaction, but are often used in cases where a mere
                  "identity verification" is needed to ensure that the document
                  is being executed by an authorized party.
                </p>
                <hr></hr>
              </li>
              <li>
                <p style={{ fontWeight: "bold" }}>Oaths</p>
                <p>
                  Oaths are administered orally in depositions and court
                  hearings in which a party is being sworn in over the telephone
                  instead of being personally present before a judge. In this
                  respect, notaries administer oaths in the same way as a judge.
                  Many court reporters are also notaries, as this allows one
                  person to both swear the party in for a deposition and to
                  transcribe the deposition. Oaths are also administered in the
                  form of affidavits and other sworn statements on paper.
                </p>
                <hr></hr>
              </li>

              <li>
                <p style={{ fontWeight: "bold" }}>Marriages</p>
                <p>
                  Marriages may be legally solemnized by a notary public between
                  parties who present the notary with a valid marriage license.
                  The law has no requirements for the form of a marriage
                  ceremony, therefore many notaries perform both civil and
                  religious marriage ceremonies.
                </p>
                <hr></hr>
              </li>

              <li>
                <p style={{ fontWeight: "bold" }}>Safe-Deposit Boxes</p>
                <p>
                  The contents of a safe-deposit box are certified by a notary
                  public in cases where the owner has died or otherwise
                  abandoned the safe-deposit box. In this case, the notary must
                  be present while a bank official and other witness open the
                  box. The notary then certifies the contents of the box and
                  makes a certificate thereof for presentation to the court or
                  to the personal representative of the Decedent's estate.
                  marriage ceremonies.
                </p>
                <hr></hr>
              </li>

              <li>
                <p style={{ fontWeight: "bold" }}>Vehicle Registraion</p>
                <p>
                  Notaries are authorized by Florida law to verify the Vehicle
                  Identification Number of a motor vehicle and certify this fact
                  to the Department of Highway Safety and Motor Vehicles when
                  that vehicle has not previously been registered with the
                  state.
                </p>
                <hr></hr>
              </li>

              <li>
                <p style={{ fontWeight: "bold" }}>Certified Copies</p>
                <p>
                  A notary public may supervise the copying (or printing, as the
                  case may be) of any record and attest to the trueness of the
                  resulting copy or printout. The record being copied (or
                  printed) cannot be a vital record, nor can it be a public
                  record (if a copy can be obtained from the custodian of the
                  public record)
                </p>
                <hr></hr>
              </li>

              <li>
                <p style={{ fontWeight: "bold" }}>Loan Signing</p>
                <p>
                  Signing agents are notaries public, who usually have
                  experience and/or training concerning the proper execution of
                  loan documents and are hired by mortgage companies, escrow
                  companies, title companies, and signing services to identify
                  loan documents, obtain the necessary signatures, and in some
                  cases deliver the documents to the borrower. A signing agent
                  is an impartial party to the transaction, and must adhere to
                  the notary laws of their state or jurisdiction.
                </p>
                <hr></hr>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
