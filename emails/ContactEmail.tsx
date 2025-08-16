import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactEmailProps {
  name: string;
  company: string;
  email: string;
  phone?: string;
  volume?: string;
  message?: string;
}

export default function ContactEmail({
  name,
  company,
  email,
  phone,
  volume,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white p-8 rounded-2xl shadow-md max-w-2xl mx-auto border border-gray-200">
            {/* Header */}
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold text-gray-800">
                📩 New Contact Form Submission
              </Heading>
              <Text className="text-sm text-gray-500 mt-2">
                You have received a new inquiry from your website.
              </Text>
            </Section>

            <Hr className="border-gray-300 my-6" />

            {/* Contact Details */}
            <Section>
              <Text className="text-gray-700 mb-2">
                <strong className="text-gray-900">Name:</strong> {name}
              </Text>
              <Text className="text-gray-700 mb-2">
                <strong className="text-gray-900">Company:</strong> {company}
              </Text>
              <Text className="text-gray-700 mb-2">
                <strong className="text-gray-900">Email:</strong> {email}
              </Text>
              {phone && (
                <Text className="text-gray-700 mb-2">
                  <strong className="text-gray-900">Phone:</strong> {phone}
                </Text>
              )}
              {volume && (
                <Text className="text-gray-700 mb-2">
                  <strong className="text-gray-900">Volume:</strong> {volume}
                </Text>
              )}
              {message && (
                <Section className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <Text className="text-gray-700 mb-1">
                    <strong className="text-gray-900">Message:</strong>
                  </Text>
                  <Text className="text-gray-600">{message}</Text>
                </Section>
              )}
            </Section>


            <Hr className="border-gray-300 my-6" />

            {/* Footer */}
            <Section className="text-center text-xs text-gray-500">
              <Text>
                This email was sent as part of a contact form submission on HEX-PAYS website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
