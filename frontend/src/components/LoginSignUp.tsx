"use client"

import { useState } from "react"
import { Globe, Eye, EyeOff } from "lucide-react"
import googleIcon from "./assets/google.svg"
import appleIcon from "./assets/apple.svg"
import facebookIcon from "./assets/facebook.svg"

function LoginSignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  return (
    <div className="min-h-screen bg-[#f5f2ea] flex flex-col">
      {/* Header */}
      <header className="w-full p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">Razor</h1>
          <div className="hidden md:flex items-center ml-8 text-sm text-gray-600">
            <span>Sales@razor.uk</span>
            <span className="ml-2">→</span>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button className="p-2 rounded-full">
            <Globe size={20} />
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`text-sm md:text-base ${activeTab === "signup" ? "font-semibold" : ""}`}
          >
            Sign up
          </button>
          <button className="bg-[#ffcb8e] hover:bg-[#ffc27a] text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            Request Demo
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-6 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Squiggly lines */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 text-gray-300">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M10,60 Q30,35 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 text-gray-300">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M10,60 Q30,35 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          {/* Boxes */}
          <div className="hidden md:block absolute top-1/3 left-1/6 w-16 h-16 border border-gray-300 rounded"></div>
          <div className="hidden md:block absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-300 rounded"></div>

          {/* Dotted boxes */}
          <div className="hidden md:block absolute bottom-1/4 left-1/5 w-20 h-20 bg-[#ffcb8e] rounded opacity-70">
            <div className="w-full h-full relative">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-black rounded-full"
                  style={{
                    top: `${Math.floor(i / 5) * 20}%`,
                    left: `${(i % 5) * 20}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="hidden md:block absolute top-1/4 right-1/5 w-20 h-20 bg-[#ffcb8e] rounded opacity-70">
            <div className="w-full h-full relative">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-black rounded-full"
                  style={{
                    top: `${Math.floor(i / 5) * 20}%`,
                    left: `${(i % 5) * 20}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Person illustration */}
          <div className="hidden lg:block absolute right-1/4 bottom-1/3">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,100 Q120,80 130,100 T160,100" stroke="black" strokeWidth="1" fill="none" />
              <path d="M120,90 L140,110 M140,90 L120,110" stroke="black" strokeWidth="1" />
              <path d="M100,70 Q110,60 120,70 T140,70" stroke="black" strokeWidth="1" fill="none" />
              <rect x="90" y="80" width="30" height="40" stroke="black" strokeWidth="1" fill="none" />
              <path d="M90,120 L80,140 M120,120 L130,140" stroke="black" strokeWidth="1" />
              <circle cx="110" cy="60" r="10" stroke="black" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 md:p-8 z-10">
          {activeTab === "login" ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-2">Agent Login</h2>
              <p className="text-center text-gray-600 mb-6">Hey, Enter your details to get sign in to your account</p>

              <form className="space-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Email / Phone No."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Passcode"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="text-sm text-center">
                  <a href="#" className="text-gray-600 hover:underline">
                    Having trouble in sign in?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffcb8e] hover:bg-[#ffc27a] py-3 rounded-lg font-medium transition-colors"
                >
                  Sign in
                </button>
              </form>

              <div className="my-6 flex items-center justify-center gap-2">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm text-gray-500">Or Sign in with</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={googleIcon || "/placeholder.svg"} alt="Google" className="w-5 h-5" />
                </button>
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={appleIcon || "/placeholder.svg"} alt="Apple" className="w-5 h-5" />
                </button>
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <button onClick={() => setActiveTab("signup")} className="text-black font-medium hover:underline">
                  Request Now
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
              <p className="text-center text-gray-600 mb-6">Create your account to get started</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                  />
                </div>

                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffcb8e]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffcb8e] hover:bg-[#ffc27a] py-3 rounded-lg font-medium transition-colors"
                >
                  Create Account
                </button>
              </form>

              <div className="my-6 flex items-center justify-center gap-2">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm text-gray-500">Or Sign up with</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={googleIcon || "/placeholder.svg"} alt="Google" className="w-5 h-5" />
                </button>
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={appleIcon || "/placeholder.svg"} alt="Apple" className="w-5 h-5" />
                </button>
                <button className="flex justify-center items-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-600">Already have an account? </span>
                <button onClick={() => setActiveTab("login")} className="text-black font-medium hover:underline">
                  Sign in
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center text-sm text-gray-600">
        <p>
          Copyright ©Razor 2023 |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  )
}

export default LoginSignUp

