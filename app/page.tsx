"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  CreditCard,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Headphones,
  BarChart3,
  Smartphone,
  Building,
  Wallet,
  User,
} from "lucide-react"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import PopupForm from "@/components/popup/PopupForm"

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isPopupOpen && event.target instanceof Element) {
        const popup = document.getElementById("contact-popup")
        if (popup && !popup.contains(event.target)) {
          setIsPopupOpen(false)
        }
      }
    }

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isPopupOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
      <Header setIsPopupOpen={setIsPopupOpen} />

      <section className="py-20 sm:py-10 pt-10 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/60 rounded-full animate-float"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-indigo-200/50 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/45 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300/30 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="relative mb-2">
                <div className="inline-block animate-bounce-in">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium animate-pulse-glow"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Simple • Reliable • Fast
                  </Badge>
                </div>
                <h1 className="text-5xl sm:mt-5 lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Modern payment system for <span className="text-blue-600 animate-gradient-text">ambitious teams</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Scale acceptance, fast settlements, and rejection support. No drama, no surprises — just payments that
                work every day.
              </p>

              <div className="flex flex-col gap-6">
                <Button
                  size="lg"
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 group w-fit"
                >
                  Get started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex sm:flex-row flex-col  mobile:items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-green-800">PCI DSS Level 1</div>
                        <div className="text-xs text-green-600">Highest Security Standard</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex sm:flex-row flex-col  mobile:items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-blue-800">99.9% Secure</div>
                        <div className="text-xs text-blue-600">Maximum Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex sm:flex-row flex-col  mobile:items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-purple-800">Fraud Protected</div>
                        <div className="text-xs text-purple-600">AI-Powered Detection</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex sm:flex-row flex-col  mobile:items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-orange-800">24/7 Support</div>
                        <div className="text-xs text-orange-600">Always Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid with larger icons */}
            <div className="grid grid-cols-2 pt-6 gap-5 animate-slide-in-right">
              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reliable Uptime</h3>
                    <p className="text-sm text-gray-600 pt-2">Guaranteed 99.9% uptime for your business needs</p>
                  </div>
                </div>
              </Card>
              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                    <p className="text-sm text-gray-600 pt-2">Process payments in milliseconds</p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                    <p className="text-sm text-gray-600 pt-2">Always know what you're paying for</p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Support</h3>
                    <p className="text-sm text-gray-600 pt-2">Real support when you need it most</p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Integration</h3>
                    <p className="text-sm text-gray-600 pt-2">Get up and running in minutes</p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Machine Learning</h3>
                    <p className="text-sm text-gray-600 pt-2">AI-powered fraud detection and prevention</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        id="why-hex-pays"
        className="sm:py-20 py-5 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-200/15 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-2xl px-8 py-2 mb-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Industry Leaders Choose Hex-Pays
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade reliability, lightning-fast processing, and unmatched security so your revenue
              flows seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Mission-critical payment infrastructure with 99.99% uptime, instant settlements, and comprehensive fraud
                protection that scales with your business growth.
              </p>
            </Card>

            <Card
              className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning-Fast Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Sub-second transaction processing with flexible settlement cycles. Receive funds when you need them with
                industry-leading speed and zero delays.
              </p>
            </Card>

            <Card
              className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up bg-gradient-to-br from-white via-purple-50/30 to-violet-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Security & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                PCI DSS Level 1 certification, AI-powered fraud detection, and dedicated 24/7 expert support. When you
                need help, you get immediate assistance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="what-we-do"
        className="py-20 bg-gradient-to-br from-gray-50 via-slate-50/50 to-blue-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/15 to-indigo-200/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-40 right-10 w-56 h-56 bg-gradient-to-br from-purple-200/15 to-pink-200/10 rounded-full animate-float"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-cyan-600/10 rounded-2xl px-8 py-2 mb-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Complete Payment Ecosystem
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful solutions that work independently or together — scale your payment infrastructure as your
              business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Acquiring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Next-generation card processing with intelligent routing, real-time fraud detection, and
                enterprise-grade security protocols.
              </p>
            </Card>

            <Card
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-white via-green-50/40 to-emerald-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Payouts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Streamlined account-to-account transfers with real-time processing, automated reconciliation, and
                comprehensive tracking.
              </p>
            </Card>

            <Card
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-white via-purple-50/40 to-violet-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Partner Settlements</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automated partner payouts with transparent tracking, flexible scheduling, and detailed reporting for
                marketplace operations.
              </p>
            </Card>

            <Card
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-white via-orange-50/40 to-amber-50/30 border-0 shadow-lg group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Global Treasury</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multi-currency treasury management with intelligent cash flow optimization, automated compliance, and
                real-time visibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section id="reliability" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reliability you can measure</h2>
            <p className="text-xl text-gray-600">Designed for high availability and consistent performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">High availability</h3>
              <p className="text-gray-600">
                Built for maximum infrastructure with continuous health checks and active failover.
              </p>
            </Card>

            <Card
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strong security</h3>
              <p className="text-gray-600">
                PCI DSS Level 1 certified, 3-D Secure, and robust data protection across the stack.
              </p>
            </Card>

            <Card
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real support</h3>
              <p className="text-gray-600">24/7 trusted response with transparent communication and clear SLAs.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        id="how-we-work"
        className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-32 w-80 h-80 bg-gradient-to-br from-indigo-200/15 to-purple-200/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-cyan-200/10 rounded-full animate-float"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-blue-600/10 rounded-2xl px-8 py-2 mb-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Seamless Implementation Journey
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to full-scale deployment — a proven methodology that gets you processing
              payments faster.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Strategic Discovery",
                desc: "Deep-dive analysis of your business requirements, risk profile, and growth objectives with dedicated solution architects.",
                color: "blue",
              },
              {
                icon: User,
                title: "Rapid Onboarding",
                desc: "Streamlined setup process with automated configuration, compliance verification, and integration testing.",
                color: "green",
              },
              {
                icon: Zap,
                title: "Live Testing",
                desc: "Comprehensive testing environment with real-time monitoring, performance optimization, and security validation.",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "Production Scale",
                desc: "Confident go-live with continuous monitoring, performance analytics, and dedicated success management.",
                color: "orange",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-white via-${step.color}-50/40 to-${step.color}-50/20 border-0 shadow-lg group`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <step.icon className={`w-10 h-10 text-white`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Let's bring your vision to life.</h2>
          <p className="text-xl mb-8 opacity-90">Share your business story and payment requirements.</p>
          <Button
            onClick={() => setIsPopupOpen(true)}
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
          >
            Start contact now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

     <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-12 text-sm opacity-80">
  <span>PCI DSS Level 1</span>
  <span>3-D Secure</span>
  <span>Fraud controls</span>
  <span>Chargeback tools</span>
  <span>24/7 support</span>
</div>

        </div>
      </section>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Popup */}
      {isPopupOpen && (
        <PopupForm setIsPopupOpen={setIsPopupOpen} />
      )}
    </div>
  )
}
