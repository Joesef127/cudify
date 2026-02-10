import AboutHero from "../components/AboutHero";
import CommunitySection from "../components/CommunitySection";
import CTASection from "../components/CTASection";
import TeamSection from "../components/TeamSection";

export default function About() {
    return (
        <div>
            <AboutHero />
            <TeamSection />
            <CommunitySection />
            <CTASection />
        </div>
    )
}