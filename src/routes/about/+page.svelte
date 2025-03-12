<script>
    import Hero from "../../components/about/Hero.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Experience from "../../components/about/Experience.svelte";
</script>

<div>
    <Navbar />
    <Hero />
    <!-- Experiences -->
    <div class="bg-slate-100 px-12 py-12 lg:px-24 lg:py-28">
        <h3 class="block text-6xl lg:text-7xl text-black font-semibold">Experience</h3>
        <Experience
            title="UX Design Intern @ NextRipple"
            date="May 2024 - August 2024"
            description="Developing mobile (iOS, Android) onboarding experiences,
            AI-powered workout and nutrition pages for startup."
        />
        <Experience
                title="UX Design Intern @Flento"
                date="January 2024 - May 2024"
                description="Worked on improving client relationship management features to help fitness businesses decrease member churn rates and improve engagement, as well as researching improvements on information architecture of payment flows."
        />
        <Experience
                title="UX Design & SEO Intern @Voiceflip"
                date="January 2024 - May 2024"
                description="UX and content design intern for web and mobile redesign project."
        />
        <Experience
                title="Communications Design Intern @Deaf Culture Centre"
                date="June 2023 - Sept 2023"
                description="Led branding and designs for marketing collateral to create marketing collateral and engaging content on social media, as well as for our annual newsletter. Implemented strategic content plans, market research, and used KPIs/metrics to optimize social media performance with accessible at the forefront of business and design strategies."
        />
        <Experience
                title="Student Ambassador @University of Waterloo"
                date="May 2024 - Present"
                description="Assisting with events and projects to prospective UWaterloo students."
        />
        <hr>
        <Experience
                title="Director of Content Strategy @Waterloo UX"
                date="August 2023 - Present"
                description="Crafted and implemented content strategies in alignment with the club's mission to empower students and develop the foundation of knowledge for target audiences. Conducted research for Medium articles focused on UX-related topics: highlighting industry insights, UX studies, research discoveries, and more."
        />
        <Experience
                title="Creative Director @Waterloo Beauty"
                date="December 2023 - Present"
                description="Created brand identity and social media posts for UWaterloo’s Beauty Club, which aims to create fundraising efforts to support women’s shelters across the nation."
        />
        <Experience
                title="Design Lead @Waterloo Make-A-Wish"
                date="August 2023 - May 2024"
                description="Lead development of product designs and social media posts for Make-A-Wish fundraising efforts."
        />
        <Experience
                title="Design Advisor @Waterloo Data Science"
                date="August 2023 - May 2024"
                description="Provided crucial guidance and mentorship to enhance the graphic design team's capabilities, ensuring adherence to branding guidelines; resulting in a reach of over 697,000 accounts for a following of over 3,400 accounts on Instagram. Partnered with EY (Ernst & Young) to create CxC data hackathon designs."
        />
    </div>
    <Footer />
</div>
