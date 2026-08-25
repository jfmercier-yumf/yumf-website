"use client";

import Image from "next/image";
import Link from "next/link";
import { Turnstile } from "@/components/security/Turnstile";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ApplicationContent = {
  title: string;
  description: string;

  fields: {
    memberNumber: {
      label: string;
      placeholder: string;
    };

    companyName: {
      label: string;
      placeholder: string;
    };

    email: {
      label: string;
      placeholder: string;
    };

    phone: {
      label: string;
      placeholder: string;
    };

    address: {
      label: string;
      placeholder: string;
    };

    about: {
      label: string;
      placeholder: string;
    };

    security: {
      label: string;
      placeholder: string;
    };
  };

  referral: {
    label: string;
    optional: string;
    placeholder: string;
    options: readonly {
      value: string;
      label: string;
    }[];
  };

  memberNumberHelp: {
    text: string;
    cta: string;
  };

  submit: string;

  consent: {
    prefix: string;
    terms: string;
    middle: string;
    privacy: string;
    suffix: string;
  };

  confidentiality: {
    title: string;
    description: string;
  };
};

type ManufacturerApplicationApplicationProps = {
  content: ApplicationContent;
  language: "fr" | "en";
};

const fieldIcons = {
  memberNumber: "/icons/fields/member-number.svg",
  companyName: "/icons/fields/business-name.svg",
  email: "/icons/fields/email.svg",
  phone: "/icons/fields/phone.svg",
  address: "/icons/fields/address.svg",
  about: "/icons/fields/about.svg",
  referral: "/icons/fields/hear-from.svg",
} as const;

function FieldLabel({
  children,
  required = true,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-2 block text-base font-semibold text-black">
      {children}

      {required ? <span className="ml-1 text-red-500">*</span> : null}
    </label>
  );
}

function IconInput({
  icon,
  ...props
}: React.ComponentProps<typeof Input> & {
  icon: string;
}) {
  return (
    <div className="relative">
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 opacity-60"
      />

      <Input
        {...props}
        className="h-12 rounded-lg border-black/15 pl-12 text-base! placeholder:text-base placeholder:text-black/40"
      />
    </div>
  );
}

export function ManufacturerApplicationApplication({
  content,
  language,
}: ManufacturerApplicationApplicationProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black">
            {content.description}
          </p>
        </div>

        <form className="mt-10 rounded-xl border border-black/10 bg-white p-6 sm:p-10">
          <div className="space-y-7">
            <div>
              <FieldLabel>{content.fields.memberNumber.label}</FieldLabel>

              <IconInput
                icon={fieldIcons.memberNumber}
                name="memberNumber"
                placeholder={content.fields.memberNumber.placeholder}
                required
              />

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/45">
                <span>{content.memberNumberHelp.text}</span>

                <Link
                  href={`/${language}/download`}
                  className="font-semibold text-[#28CC18] hover:underline"
                >
                  {content.memberNumberHelp.cta}
                </Link>
              </div>
            </div>

            <div>
              <FieldLabel>{content.fields.companyName.label}</FieldLabel>

              <IconInput
                icon={fieldIcons.companyName}
                name="companyName"
                placeholder={content.fields.companyName.placeholder}
                required
              />
            </div>

            <div>
              <FieldLabel>{content.fields.email.label}</FieldLabel>

              <IconInput
                icon={fieldIcons.email}
                name="email"
                type="email"
                placeholder={content.fields.email.placeholder}
                required
              />
            </div>

            <div>
              <FieldLabel>{content.fields.phone.label}</FieldLabel>

              <IconInput
                icon={fieldIcons.phone}
                name="phone"
                type="tel"
                placeholder={content.fields.phone.placeholder}
                required
              />
            </div>

            <div>
              <FieldLabel>{content.fields.address.label}</FieldLabel>

              <IconInput
                icon={fieldIcons.address}
                name="address"
                placeholder={content.fields.address.placeholder}
                required
              />
            </div>

            <div>
              <FieldLabel>{content.fields.about.label}</FieldLabel>

              <div className="relative">
                <Image
                  src={fieldIcons.about}
                  alt=""
                  width={24}
                  height={24}
                  className="pointer-events-none absolute left-4 top-4 h-6 w-6 opacity-60"
                />

                <textarea
                  name="about"
                  placeholder={content.fields.about.placeholder}
                  required
                  rows={5}
                  className="flex min-h-32 w-full resize-y rounded-lg border border-black/15 bg-transparent px-4 py-3 pl-12 text-base outline-none placeholder:text-black/40 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              </div>
            </div>

            <div>
              <FieldLabel required={false}>
                {content.referral.label}{" "}
                <span className="font-normal text-black/40">
                  {content.referral.optional}
                </span>
              </FieldLabel>

              <div className="relative">
                <Image
                  src={fieldIcons.referral}
                  alt=""
                  width={24}
                  height={24}
                  className="pointer-events-none absolute left-4 top-1/2 z-10 h-6 w-6 -translate-y-1/2 opacity-60"
                />

                <Select items={content.referral.options}>
                  <SelectTrigger className="h-12! w-full rounded-lg border-black/15 bg-white pl-12 pr-4 text-base! text-black shadow-none data-placeholder:text-black/40">
                    <SelectValue placeholder={content.referral.placeholder} />
                  </SelectTrigger>

                  <SelectContent>
                    {content.referral.options.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-base data-highlighted:bg-[#28CC18]/10 data-highlighted:text-[#28CC18] data-selected:bg-transparent"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <FieldLabel>{content.fields.security.label}</FieldLabel>

              <Turnstile
                language={language}
                onVerify={() => {}}
                onExpire={() => {}}
                onError={() => {}}
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              className="min-h-12 w-full max-w-xs rounded-full border-2 border-[#28CC18] px-6 text-base font-semibold text-[#28CC18] transition-colors hover:bg-[#28CC18] hover:text-white"
            >
              {content.submit}
            </button>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-black">
              {content.consent.prefix}{" "}
              <Link
                href={`/${language}/terms`}
                className="text-[#28CC18] hover:underline"
              >
                {content.consent.terms}
              </Link>{" "}
              {content.consent.middle}{" "}
              <Link
                href={`/${language}/privacy`}
                className="text-[#28CC18] hover:underline"
              >
                {content.consent.privacy}
              </Link>{" "}
              {content.consent.suffix}
            </p>
          </div>
        </form>

        <div className="mt-10 flex gap-5 rounded-xl border border-black/10 bg-black/1.5 p-6 sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#28CC18]">
            <Image
              src="/icons/privacy/security-shield.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 brightness-0 invert"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-black sm:text-xl">
              {content.confidentiality.title}
            </h3>

            <p className="mt-2 text-base leading-relaxed text-black">
              {content.confidentiality.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
