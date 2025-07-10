import HeroSection from "@/components/HeroSection";
export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="w-full border-l-1 border-r-1 mt-10 px-14 py-10">
				<h1 className="text-5xl">Hi, I'm David.</h1>
				<p className="mt-4 text-lg w-1/2">
					I’m a computer engineering student who likes to code cool projects and make them look good.
				</p>
				<h1 className="text-5xl mt-15">Projects</h1>
			</div>
		</>
	);
}
