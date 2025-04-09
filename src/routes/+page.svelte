<script>
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Hero from "../components/home/Hero.svelte";
    import PortfolioItem from "../components/home/PortfolioItem.svelte";
    import ProjectItem from "../components/home/ProjectItem.svelte";
</script>

<div>
    <Navbar />
    <Hero />

    <!--Portfolio-->
    <div class="bg-slate-100 px-12 py-12 lg:px-24 lg:py-28">
        <h3 class="block text-6xl lg:text-7xl text-black font-semibold">Portfolio</h3>
        <PortfolioItem
            title="Strengthening customer relationships to scale revenue"
            description="App design focused on streamlining admin & client management features
                         to scale revenue for trainers and fitness businesses throughout
                         Flento's SaaS platform."
            category="INTERNSHIP // UX RESEARCH, EXPERIENCE DESIGN"
            image="./img/home/flento.png"
            gradient="bg-gradient-to-r from-orange-500 to-slate-950 bg-clip-text text-transparent"
            url="https://storage.googleapis.com/zeaj-website-static/zeaj-flento-case-study.pdf"
        />
        <PortfolioItem
            title="Personalizing cooking experiences through smart recipe discovery"
            description="Personalizing recipe discovery on social media based on budget, dietary needs, and lifestyle,
            making cooking more accessible and tailored to users' preferences."
            category="GBDA210 PROJECT // PRODUCT DESIGN * UX RESEARCH * VISUAL IDENTITY"
            image="./img/home/musicalmoon.png"
            gradient="bg-gradient-to-r from-slate-950 to-orange-500 bg-clip-text text-transparent"
            url="https://storage.googleapis.com/zeaj-website-static/zeaj-remy-case-study.pdf"
        />
        <PortfolioItem
            title="Rethinking remote work for healthier, happier workers"
            description="App designed in a solo team to promote healthier and sustainable work habits.
            Made for Toronto Metropolitan University’s 24-hour designathon, 2023. [PROJECT UNDER CONSTRUCTION]"
            category="DESIGNATHON // PRODUCT DESIGN * UX RESEARCH * VISUAL IDENTITY"
            image="./img/home/cooking.png"
            gradient="bg-gradient-to-r from-slate-950 to-green-600 bg-clip-text text-transparent"
        />
    </div>

    <!--More projects-->
    <div class="bg-slate-950 px-8 py-8 lg:px-20 lg:py-24">
        <p class="text-4xl lg:text-5xl text-white font-semibold">More projects</p>
        <div class="grid grid-cols-1 lg:grid-cols-[50%_50%] lg:gap-20 lg:pr-20">
            <ProjectItem
                image="./img/home/project1.png"
                caption="MEDIUM ARTICLE · ACCESSIBILITY & DIVERSITY IN UX"
                link="https://uwux.medium.com/breaking-barriers-how-to-design-accessibly-e284c9b49708"
            />
            <ProjectItem
                image="./img/home/project2.png"
                caption="MEDIUM ARTICLE · HEURISTIC EVALUATION ON FIGMA"
                link="https://uwux.medium.com/how-figma-applies-nielsens-10-usability-heuristics-30cf376cb727"
            />
        </div>
    </div>

    <Footer/>
</div>