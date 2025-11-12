import { Badge } from "@/components/ui/badge";
import ShowEmail from "@/components/ShowEmail";
import CallToAction from "@/components/CallToAction";
export default function Project() {
	return (
		<div className="flex flex-col gap-8 items-center mt-14 md:px-10">
			<img src="/BlindHope/logo.svg" alt="Blind Hope" className="w-50" />
			<div className="flex flex-col items-center gap-2 mt-4">
				<h1 className="text-3xl">Blind Hope - Java 2D Platformer</h1>
				<div className="flex mt-4">
					<Badge className="mr-2 opacity-50">Game Development</Badge>
					<Badge className="mr-2 opacity-50">Logo Design</Badge>
				</div>
			</div>
			<p className="text-lg md:text-xl mt-8 leading-normal">
				<b>Blind Hope</b> is a 2D platformer game developed in Java. I worked on this project for half a
				semester together with a colleague from university. We were free to choose the theme and type of game we
				wanted to create, so we came up with this idea: Blind Hope – the story of Esperis from the planet
				Caligo. His mission is to <b>search for and collect the ingredients</b> needed to craft a cure that
				could save the queen.
			</p>
			<img src="/BlindHope/menu.png" alt="" />
			<p className="text-lg md:text-xl mt-8 leading-normal">
				For the visual style, we chose <b>pixel art,</b> which gave the game a retro and nostalgic atmosphere
				while also fitting perfectly with its mysterious and adventurous tone. Many of the assets, especially
				the backgrounds, were based on <b>free resources</b> we found online, but we carefully selected,
				adapted, and integrated them into the project so that they would match the artistic direction of the
				game and blend naturally with the elements we created ourselves. This approach allowed us to build a{" "}
				<b>consistent visual world</b> without losing the personal touch of our own design work.
			</p>
			<div className="flex flex-col lg:flex-row gap-8 w-full">
				<div className="lg:w-[70%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/level1.png" alt="" />
				</div>
				<div className="lg:w-[30%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full w-full" src="/BlindHope/sketch.jpg" alt="" />
				</div>
			</div>
			<p className="text-lg md:text-xl mt-8 leading-normal">
				The <b>unique feature</b> of this game is the idea that the planet is covered in a poisonous fog. In
				order to continue his mission, the player must pass through these fog-infested areas by{" "}
				<b>wearing a blindfold.</b> I created a special animation where Esperis puts on the blindfold, and at
				that moment the <b>fog of war</b> mechanic activates, limiting visibility and adding both challenge and
				atmosphere to the gameplay.
			</p>
			<img src="/BlindHope/blindfold.gif" alt="" />
			<p className="text-lg md:text-xl mt-8 leading-normal">
				My main <b>responsibilities</b> were focused on both the visual and gameplay aspects of the project. On
				the visual side, I worked on the{" "}
				<b>design of menus, the game logo, character sprites, character animations, and backgrounds.</b> On the
				gameplay side, I was responsible for implementing core mechanics such as
				<b> character movement, collisions, combat, player health, and overall game logic.</b> Last but not
				least, I also handled the <b>coding and integration of maps</b> using tilesets, making sure that the
				levels were functional and visually consistent with the game’s style.
			</p>
			<div className="flex flex-col lg:flex-row gap-8 w-full">
				<div className="lg:w-[40%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/icon.jpg" alt="" />
				</div>
				<div className="lg:w-[60%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/level2.png" alt="" />
				</div>
			</div>
			<img src="/BlindHope/level3.png" alt="" />
			<p className="text-lg md:text-xl mt-8 leading-normal">
				In the end, we managed to build a game <b>we were truly proud of</b> and a project we worked on with
				real enjoyment. Even though some of our solutions weren’t always the most efficient, the process itself
				was incredibly valuable—we learned a lot about <b>Java</b>, discovered how to apply{" "}
				<b>design patterns</b> in practice, and gained experience in <b>collaborating as a team</b> using
				GitHub.
			</p>
			<img src="/BlindHope/uml.png" alt="" />
			{/* <div className="mt-10 w-full">
				<h1 className="text-4xl lg:text-5xl">Need help with a project?</h1>
				<div className="flex flex-wrap mt-10 gap-6">
					<ShowEmail />
					<CallToAction text="Book a call >" link="https://calendly.com/davidburaga10/discutie-1-la-1" />
				</div>
			</div> */}
			<p className="mt-30 text-center font-bold">davidburaga 2025</p>
		</div>
	);
}
