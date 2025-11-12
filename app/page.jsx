import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import ToolsAndTech from "@/components/ToolsAndTech";
import Testimonial from "@/components/Testimonial";
import ShowEmail from "@/components/ShowEmail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { dmSans } from "./layout";
import { ptSerif } from "./layout";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className={`w-full border-l-1 border-r-1 mt-10 px-4 md:px-14 py-10 ${dmSans.className}`}>
				<h1 className={`text-4xl md:text-5xl ${ptSerif.className}`}>About me</h1>

				<p className="mt-4 text-lg md:text-xl md:w-1/2">
					I’m a third-year Computer Engineering student focused on developing purposeful, user-centered
					projects that blend solid engineering with thoughtful design.
				</p>
				<p className="text-lg md:text-xl">Iași | Romania</p>
				<h1 className={`text-4xl md:text-5xl mt-30 ${ptSerif.className}`}>Projects</h1>
				<div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-4 mt-10">
					<ProjectCard
						image="/BlindHopeLogoBlack.svg"
						tags={["Game Development", "Logo Design"]}
						link="blind-hope"
					/>
					<ProjectCard
						image="/ApologiaLogoBlack.svg"
						tags={["Branding", "Logo Design"]}
						link="apologia-reformata"
					/>
					<ProjectCard image="/SharkLogoBlack.svg" tags={["Logo Design", "Branding"]} link="shark" />
				</div>
				<div className="w-full text-center mt-20">
					<CallToAction text="More Projects >" link="/projects" />
				</div>
				{/* <div className="flex w-full mt-40"> */}
				<div className="w-full flex flex-col items-center">
					{/* <div className="w-1/2 mt-40">
						<h1 className={`text-5xl ${ptSerif.className}`}>About me</h1>
						<div className="w-full h-40 relative rounded-md overflow-hidden mt-8 bg-foreground">
							<Image alt="me" fill objectFit="cover" src="/home-bg.jpg" className="opacity-40" />
							<div className="absolute z-10 left-10 bottom-4 flex flex-col md:flex-row items-start md:items-center gap-4">
								<Avatar className="w-24 h-24">
									<AvatarImage src="avatar.jpg" />
									<AvatarFallback className="bg-foreground text-white">DB</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-2 md:gap-1 text-white">
									<h1 className={`text-5xl ${ptSerif.className}`}>David</h1>
									<div className="flex gap-1">
										<MapPin fill="white" size={20} />
										<p>Iași, Romania</p>
									</div>
								</div>
							</div>
						</div>
						<p className="mt-4 text-xl">
							I’m a third-year Computer Engineering student focused on developing purposeful,
							user-centered projects that blend solid engineering with thoughtful design.
						</p>
					</div> */}
					<ToolsAndTech />
				</div>
				{/* </div> */}
				<h1 className={`text-4xl md:text-5xl mt-50 ${ptSerif.className}`}>Recommendations</h1>
				<div className="grid gird-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 w-full mt-20">
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
						image="/clients/anto.jpg"
						name="Antonela Sticea"
						textEN="David’s work has been truly valuable for me and my business. Thanks to the website he created, my prospects can get to know me in just a few minutes and even reach out to collaborate. Everything is tailored to my taste, yet modern and up to date, which helps me present a professional image to those interested in what I do. I wholeheartedly recommend his services if you want to stand out online and reach high-end clients!"
						textRO="Munca lui David a fost de un real folos pentru mine și afacerea mea. Cu ajutorul site-ului creat de el, prospectii mei au ocazia sa ma cunoasca in doar cateva minute si chiar sa ma contacteze in vederea colaborării. Totul este făcut pe gustul meu, dar si actual, ceea ce imi creează o imagine de profesionist în fața celor interesați de activitatea pe care o desfășor. Recomand cu încredere serviciile lui dacă doriți să arătați cât mai bine în online și să ajungeți la clienți de lux!"
					/>
					<Testimonial
						image="/clients/startpoint.png"
						name="Startpoint Lighthouse"
						textEN="I collaborated with David to create my company’s logo, and it was an excellent experience. Although I wasn’t sure what I wanted at first, David asked the right questions to understand my brand. His ability to grasp my vision and turn it into a creative and meaningful design was truly impressive. Throughout the entire process, he was extremely professional, detail-oriented, and open to feedback. The final design is modern and perfectly captures the essence of my company. I’ve already received many compliments on the logo, which speaks to the quality of his work. I highly recommend him to anyone looking for top-quality design services!"
						textRO="Am colaborat cu David pentru crearea logo-ului companiei mele și a fost o experiență excelentă. Deși la început nu eram sigură ce îmi doream, David a pus întrebări potrivite pentru a înțelege brandul meu. Abilitatea lui de a înțelege viziunea mea și de a o transforma într-un design creativ și semnificativ a fost cu adevărat impresionantă. Pe tot parcursul procesului a fost extrem de profesionist, atent la detalii și deschis la feedback. Designul final este modern și surprinde perfect esența companiei mele. Am primit deja multe complimente pentru logo-ul creat, ceea ce confirmă calitatea muncii lui. Îl recomand oricui caută servicii de design de înaltă calitate!"
					/>

					{/* <div className="flex items-center gap-8 md:gap-4">
						<p className="text-lg">Need help with a project?</p>
						<CallToAction text="Let's talk >" link="https://calendly.com/davidburaga10/discutie-1-la-1" />
					</div> */}
				</div>
				<h1 className={`text-4xl md:text-5xl mt-20 ${ptSerif.className}`}>Connect with me</h1>
				<div className="flex flex-wrap mt-10 gap-6">
					<ShowEmail />
					{/* <CallToAction text="Book a call >" link="https://calendly.com/davidburaga10/discutie-1-la-1" /> */}
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
