import Head from "next/head";
import Link from "next/link";
import { HeroSection } from "@/components/LandingComponents/HeroSection";
import styles from "@/styles/Home.module.css";
import FeaturesSection from "@/components/LandingComponents/FeaturesSection";
import { Stack } from "@mui/material";
import ToolsSection from "@/components/LandingComponents/ToolsSection";
import FAQsection from "@/components/LandingComponents/FAQsection";
import GetInTouchSection from "@/components/LandingComponents/GetInTouchSection";
import Footer from "@/components/LandingComponents/Footer";
import Cursor from "@/components/LandingComponents/Cursor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scrapefox CRM</title>
        <meta
          name="description"
          content="Best CRM for marketing professionals!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logos/Favicon.svg" />
      </Head>
      <Cursor />
      <main className={styles.main}>
        <Stack
          gap="5rem"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          <HeroSection />
          <FeaturesSection />
          <ToolsSection />
          <FAQsection />
          <GetInTouchSection />
          <Footer />
        </Stack>
      </main>
    </>
  );
}
