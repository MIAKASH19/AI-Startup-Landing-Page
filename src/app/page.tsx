"use client"
import { CallToAction } from "@/sections/CallToAction"
import { Features } from "@/sections/Features"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { Testimonials } from "@/sections/Testimonials"
import Lenis from 'lenis'


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

export default function Home() {
  return <>
    <Header />
    <Hero />
    <LogoTicker />
    <Features />
    <Testimonials />
    <CallToAction />
    <Footer />
  </>
}
