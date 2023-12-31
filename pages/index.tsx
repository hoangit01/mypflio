import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
// Turn on when deploy to Production

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Khai Hoang - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="relative z-10 w-full h-screen bg-white dark:bg-bodyColor font-bodyFont text-textLight 
        overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-textDark/20 scrollbar-thumb-textDark/60
        scrollbar-thumb-rounded-full"
      >
        <div className="bg-textLight dark:bg-bodyColor -z-10 absolute top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]  sm:w-[68.75rem]"></div>
        <div
          className="bg-[#dbd7fb] dark:bg-slate-800 -z-10 absolute top-[6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]  sm:w-[68.75rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>

        <Navbar></Navbar>
        <div className="w-full h-full xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide></LeftSide>
          </motion.div>
          <div className="h-full w-full mx-auto p-0">
            <Banner></Banner>
            <div className="px-4">
              <About></About>
              <Experience></Experience>
              <Projects></Projects>
              <Archive></Archive>
              <Contact></Contact>
              <Footer></Footer>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide></RightSide>
          </motion.div>
        </div>
      </main>
      <Analytics />
    </>
  );
}
