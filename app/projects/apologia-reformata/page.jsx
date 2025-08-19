import { Badge } from "@/components/ui/badge";
import ShowEmail from "@/components/ShowEmail";
import CallToAction from "@/components/CallToAction";
import Testimonial from "@/components/Testimonial";
export default function Project() {
	return (
		<div className="flex flex-col gap-8 items-center mt-14 md:px-10">
			<img src="/ApologiaLogoBlack.svg" alt="Apologia Reformata" className="w-80" />
			<div className="flex flex-col items-center gap-2 mt-4">
				<h1 className="text-3xl">Branding project for Apologia Reformată</h1>
				<div className="flex mt-4">
					<Badge className="mr-2 opacity-50">Logo Design</Badge>
					<Badge className="mr-2 opacity-50">Branding</Badge>
				</div>
			</div>
			<p className="text-lg md:text-xl mt-8 leading-normal">
				For this project, I worked on developing a <b>new logo</b> and a refreshed <b>brand identity.</b>{" "}
				Alongside the visual elements, I also created a <b>brand guide</b> that includes the color palette,
				typography choices, and a series of mockups designed to ensure consistency across all brand-related
				materials.
			</p>
			<img src="/Apologia/table_stand.jpg" alt="" />
			<p className="text-lg md:text-xl py-8 leading-normal">
				<b>The main challenge</b> for this project was to capture the essence of the <b>existing brand</b>{" "}
				through visual elements that feel <b>instantly recognizable,</b> while also shaping a more polished and{" "}
				<b>professional identity.</b>
			</p>
			<div className="flex flex-col lg:flex-row gap-8 w-full">
				<div className="lg:w-[60%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/Apologia/table.jpg" alt="" />
				</div>
				<div className="lg:w-[40%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/Apologia/avatar.jpg" alt="" />
				</div>
			</div>
			<p className="text-lg md:text-xl py-8 leading-normal">
				The logo went through several iterations, and by incorporating the <b>feedback</b> I received, I was
				able to refine it into a final version. I really enjoyed working on this project and was excited to see
				how everything would come together in the end.
			</p>
			<div className="flex lg:flex-row flex-col gap-8 w-full">
				<div className="lg:w-[40%] overflow-hidden lg:h-100">
					<img className="lg:object-cover lg:h-full" src="/Apologia/hoodie.jpg" alt="" />
				</div>
				<div className="lg:w-[60%] overflow-hidden lg:h-100">
					<img className="lg:object-cover lg:h-full" src="/Apologia/guide.png" alt="" />
				</div>
			</div>
			<p className="text-lg md:text-xl py-8 leading-normal">
				The outcome is a <b>consistent and flexible brand identity</b> that adapts well to different platforms.
				I find it especially rewarding to see it applied in real-world contexts, from the YouTube channel to
				social media, where it strengthens the overall brand presence.
			</p>
			<img src="/Apologia/yt.png" alt="" />
			<br />
			<Testimonial
				image="/clients/apologia.jpg"
				name="Apologia Reformată"
				textEN="Recently, we updated our logo and the overall look of our YouTube interface. Everything now looks much more professional from a graphic design perspective. I have everything I need in terms of visuals for showcasing the books, hoodies, printed mugs, and platform-specific logos. We also received help redesigning the logo for the 'Povești cu Cristina' channel. Thank you for the excellent collaboration!"
				textRO="Recent am schimbat logo-ul și aspectul general al interfeței pe YouTube. Pare totul mai profesionist din punct de vedere grafic. Am tot ce îmi trebuie din punct de vedere grafic pentru o masă de prezentare a cărților, hanorace, căni printate, logo-uri pentru toate platformele. De asemenea am primit ajutor în refacerea logoului pentru canalul 'Povești cu Cristina'. Mulțumim pentru colaborarea excelentă!"
			/>
			<div className="mt-10 w-full">
				<h1 className="text-4xl lg:text-5xl">Need help with a project?</h1>
				<div className="flex flex-wrap mt-10 gap-6">
					<ShowEmail />
					<CallToAction text="Book a call >" link="https://calendly.com/davidburaga10/discutie-1-la-1" />
				</div>
			</div>
			<p className="mt-30 text-center font-bold">davidburaga 2025</p>
		</div>
	);
}
