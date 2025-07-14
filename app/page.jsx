import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import ToolsAndTech from "@/components/ToolsAndTech";
import Testimonial from "@/components/Testimonial";
import ShowEmail from "@/components/ShowEmail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="w-full border-l-1 border-r-1 mt-10 px-4 md:px-14 py-10">
				<h1 className="text-5xl">Hi, I'm David.</h1>
				<p className="mt-4 text-lg md:w-1/2">
					I’m a computer engineering student who likes to code cool projects and make them look good.
				</p>
				<h1 className="text-5xl mt-15">Projects</h1>
				<div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-4 mt-10">
					<ProjectCard image="/VesselLogoBlack.svg" tags={["Web Development", "Web Desing", "Logo Design"]} />
					<ProjectCard image="/ApologiaLogoBlack.svg" tags={["Branding", "Logo Design"]} />
					<ProjectCard image="/BlindHopeLogoBlack.svg" tags={["Game Development", "Logo Design"]} />
				</div>
				<div className="w-full text-center mt-20">
					<CallToAction text="More Projects >" link="/projects" />
				</div>
				<ToolsAndTech />
				<h1 className="text-5xl mt-30">What people say</h1>
				<div className="flex flex-col lg:flex-row justify-between gap-4 w-full mt-10">
					<Testimonial
						image="/clients/apologia.jpg"
						name="Apologia Reformată"
						textEN="Recently, we updated our logo and the overall look of our YouTube interface. Everything now looks much more professional from a graphic design perspective. I have everything I need in terms of visuals for showcasing the books, hoodies, printed mugs, and platform-specific logos. We also received help redesigning the logo for the 'Povești cu Cristina' channel. Thank you for the excellent collaboration!"
						textRO="Recent am schimbat logo-ul și aspectul general al interfeței pe YouTube. Pare totul mai profesionist din punct de vedere grafic. Am tot ce îmi trebuie din punct de vedere grafic pentru o masă de prezentare a cărților, hanorace, căni printate, logo-uri pentru toate platformele. De asemenea am primit ajutor în refacerea logoului pentru canalul 'Povești cu Cristina'. Mulțumim pentru colaborarea excelentă!"
					/>
					<Testimonial
						image="/clients/refugiu.jpg"
						name="Refugiu Pentru Suflet"
						textEN="Our collaboration with David was excellent. We shared our vision and our mission, and he immediately understood the direction we wanted to take. In a very short time, he showed us several logo options, each clearly reflecting our values. After choosing the design we liked most, David came up with various color ideas and shades that would best represent us visually. His professionalism and creativity helped us strengthen our brand identity and present ourselves to our audience in a clear and appealing way."
						textRO="Colaborarea noastră cu David a fost una excelentă. I-am prezentat viziunea și scopul asociației noastre, iar el a înțeles imediat direcția pe care o dorim. Într-un timp foarte scurt, ne-a prezentat mai multe variante de logo, fiecare reflectând în mod clar valorile noastre. După ce am ales designul care ne-a plăcut cel mai mult, David a venit cu diverse idei de culori și nuanțe care să ne reprezinte vizual cât mai bine. Profesionalismul și creativitatea lui ne-au ajutat să ne consolidăm identitatea de brand și să ne prezentăm într-un mod coerent și atractiv publicului nostru."
					/>
					<Testimonial
						textEN="David’s work has been truly valuable for me and my business. Thanks to the website he created, my prospects can get to know me in just a few minutes and even reach out to collaborate. Everything is tailored to my taste, yet modern and up to date, which helps me present a professional image to those interested in what I do. I wholeheartedly recommend his services if you want to stand out online and reach high-end clients!"
						textRO="Munca lui David a fost de un real folos pentru mine și afacerea mea. Cu ajutorul site-ului creat de el, prospectii mei au ocazia sa ma cunoasca in doar cateva minute si chiar sa ma contacteze in vederea colaborării. Totul este făcut pe gustul meu, dar si actual, ceea ce imi creează o imagine de profesionist în fața celor interesați de activitatea pe care o desfășor. Recomand cu încredere serviciile lui dacă doriți să arătați cât mai bine în online și să ajungeți la clienți de lux!"
						image="/clients/anto.jpg"
						name="Antonela Sticea"
					/>
					{/* <Testimonial /> */}
					{/* <Testimonial /> */}
				</div>
				<h1 className="text-5xl mt-20">Connect with me</h1>
				<div className="flex flex-wrap mt-10 gap-6">
					<ShowEmail />
					<CallToAction text="Book a call >" link="https://calendly.com/davidburaga10/discutie-1-la-1" />
					<Link href="https://www.linkedin.com/in/david-buraga-aba007365/">
						<Avatar className="rounded-none">
							<AvatarImage src="/Tools/linkedin.svg" />
							<AvatarFallback>LI</AvatarFallback>
						</Avatar>
					</Link>
					<Link href="https://github.com/dawidy10">
						<Avatar>
							<AvatarImage src="/Tools/github.svg" />
							<AvatarFallback>GH</AvatarFallback>
						</Avatar>
					</Link>
					<Link href="https://www.youtube.com/@davidwd10">
						<Avatar className="rounded-none">
							<AvatarImage src="/Tools/youtube.svg" />
							<AvatarFallback>YT</AvatarFallback>
						</Avatar>
					</Link>
				</div>
				<p className="mt-30 text-center font-bold">davidburaga 2025</p>
			</div>
		</>
	);
}
