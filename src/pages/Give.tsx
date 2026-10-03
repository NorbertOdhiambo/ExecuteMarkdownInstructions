import { useState } from "react";
import Button from "../components/ui/Button";

function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };
  return { copied, copy };
}

function PayPalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 21H3L5.5 5h7c3.5 0 5.5 1.5 5 4.5C17 13 14.5 14.5 11 14.5H8.5L7.5 21z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 14.5H8L7 21h4.5c3.5 0 5.5-1.5 5-4.5-.3-1.8-1.8-2.5-4-2z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WesternUnionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.5" />
      <path d="M8 8l2 8M12 8v8M16 8l-2 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 10h18M3 14h18M5 6l7-3 7 3M5 18v-8M19 18v-8M3 18h18" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileMoneyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="#6B7280" strokeWidth="1.5" />
      <path d="M10 5h4M10.5 18.5h3" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 10.5h5M12 8v5" stroke="#A82626" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface CopyRowProps {
  label: string;
  value: string;
  buttonLabel: string;
  successLabel?: string;
  mono?: boolean;
}

function CopyRow({ label, value, buttonLabel, successLabel = "Copied!", mono = false }: CopyRowProps) {
  const { copied, copy } = useCopy(value);
  return (
    <div className="bg-[#F8F6F3] rounded-lg p-5">
      <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">{label}</p>
      <div className="flex items-center gap-3 flex-wrap">
        <p className={`${mono ? "font-mono text-lg tracking-wider" : "text-sm"} font-semibold text-[#111111] break-all leading-snug`}>
          {value}
        </p>
        <Button
          onClick={copy}
          aria-label={copied ? successLabel : `${buttonLabel}: ${value}`}
          size="sm"
          className="min-h-11 flex-shrink-0"
        >
          {copied ? successLabel : buttonLabel}
        </Button>
      </div>
      {copied && (
        <p role="status" aria-live="polite" className="mt-2 text-[#A82626] text-xs font-sans">
          {successLabel}
        </p>
      )}
    </div>
  );
}

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  note?: string;
}

function MethodCard({ icon, title, children, note }: MethodCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded bg-[#F8F6F3] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h2 className="font-serif text-xl font-semibold text-[#111111]">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
      {note && (
        <p className="mt-5 text-[#6B7280] text-xs font-sans leading-relaxed border-t border-gray-100 pt-5">
          {note}
        </p>
      )}
    </div>
  );
}

export default function Give() {
  return (
    <main>
      {/* Page hero */}
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Generosity</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Give With Purpose</h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl">
            Your generosity helps support worship, ministry, outreach, discipleship, community care, and the ongoing work of the church.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Why give */}
          <div className="text-center mb-14">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4">Why Give</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111111] mb-5">
              Your Giving Makes a Difference
            </h2>
            <p className="text-[#6B7280] font-sans text-base leading-relaxed max-w-2xl mx-auto">
              Every gift supports Sunday feeding programs, children's Sunday School, youth ministry, women's fellowship, community care for orphans and vulnerable children, and <em>"Jesus in the Village"</em> evangelistic crusades.
            </p>
          </div>

          {/* Payment methods */}
          <div className="space-y-6">

            {/* 1 — Bank Transfer */}
            <MethodCard
              icon={<BankIcon />}
              title="Bank Transfer"
              note="Please verify account details with church leadership before making a transfer."
            >
              <CopyRow
                label="Account Name"
                value="Spring Of Miracles Ministry / House Of Prayer For All Nations"
                buttonLabel="Copy"
                successLabel="Copied!"
              />
              <CopyRow
                label="Account Number"
                value="1190282585415"
                buttonLabel="Copy"
                successLabel="Copied!"
                mono
              />
              <div className="bg-[#F8F6F3] rounded-lg p-5">
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">More Ways to Give</p>
                <p className="text-[#6B7280] text-sm font-sans">
                  M-Pesa Paybill, PayPal, and Western Union are available below.
                </p>
              </div>
            </MethodCard>

            {/* 2 — M-Pesa */}
            <MethodCard
              icon={<MobileMoneyIcon />}
              title="M-PESA"
              note="These proposed payment details, including the account reference, must be confirmed by church leadership before launch."
            >
              <div>
                <p className="mb-4 font-serif text-xl font-semibold text-[#111111]">
                  Give via M-Pesa Paybill
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <CopyRow
                    label="Paybill Number"
                    value="247247"
                    buttonLabel="Copy Paybill Number"
                    successLabel="Paybill number copied!"
                    mono
                  />
                  <CopyRow
                    label="Account Number"
                    value="1190282585415"
                    buttonLabel="Copy Account Number"
                    successLabel="Account number copied!"
                    mono
                  />
                </div>
              </div>
              <div className="rounded-lg border border-gray-100 p-5">
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#A82626]">
                  How to Give
                </p>
                <ol className="list-decimal space-y-2 pl-5 font-sans text-sm leading-relaxed text-[#6B7280]">
                  <li>Open M-Pesa on your phone.</li>
                  <li>Select <strong className="text-[#111111]">Lipa na M-Pesa</strong>.</li>
                  <li>Select <strong className="text-[#111111]">Pay Bill</strong>.</li>
                  <li>Enter the Paybill Number: <strong className="text-[#111111]">247247</strong>.</li>
                  <li>Enter the Account Number: <strong className="text-[#111111]">1190282585415</strong>.</li>
                  <li>Enter the amount you wish to give.</li>
                  <li>Confirm the payment details and complete the transaction using your M-Pesa PIN.</li>
                </ol>
              </div>
            </MethodCard>

            {/* 3 — PayPal */}
            <MethodCard
              icon={<PayPalIcon />}
              title="PayPal"
              note="Send your gift to the PayPal email address above. Do not send to any other address."
            >
              <div className="bg-[#F8F6F3] rounded-lg p-5">
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">Account Name</p>
                <p className="font-sans text-sm font-semibold text-[#111111]">Stephen Iha</p>
              </div>
              <CopyRow
                label="PayPal Email"
                value="kkarisa810@gmail.com"
                buttonLabel="Copy Email"
                successLabel="Email copied!"
              />
            </MethodCard>

            {/* 4 — Western Union */}
            <MethodCard
              icon={<WesternUnionIcon />}
              title="Western Union"
              note="Use the recipient name exactly as shown above when completing your Western Union transfer. Contact us if you need further assistance."
            >
              <CopyRow
                label="Recipient Name"
                value="Stephen Karisa Iha"
                buttonLabel="Copy Name"
                successLabel="Name copied!"
              />
              <div className="bg-[#F8F6F3] rounded-lg p-5">
                <p className="text-[#6B7280] text-sm font-sans leading-relaxed">
                  Use the recipient name above when sending a Western Union transfer. Additional transfer details will be confirmed by church leadership.
                </p>
              </div>
            </MethodCard>

          </div>

          {/* Online giving placeholder */}
          <div className="mt-8 bg-[#A82626] rounded-xl p-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Secure Online Giving</h3>
            <p className="text-white/80 font-sans text-base mb-4">
              An integrated online giving link will be added once confirmed by church leadership.
            </p>
            <p className="text-white/40 text-xs font-sans">[ONLINE GIVING URL TO BE CONFIRMED]</p>
          </div>

          {/* Verification notice */}
          <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-[#6B7280] text-xs font-sans leading-relaxed">
              <strong className="text-[#111111]">Please verify:</strong> All giving account details are subject to final confirmation by church leadership before the public launch of this website. The M-Pesa account reference is proposed from the supplied bank account number and requires specific confirmation. If in doubt, contact the church directly before making any transfer.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
