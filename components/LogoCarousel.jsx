"use client";

export function LogoCarousel({ logos }) {
	return (
		<div className="w-full flex justify-center absolute z-10 bottom-10">
			<div className="overflow-hidden w-[80vw] md:w-[50vw] mt-30 py-8">
				<div className="flex animate-marquee">
					{logos.concat(logos).map((logo, idx) => (
						<div key={idx} className="mx-6 md:mx-10">
							<img src={logo.src} alt={`Logo ${idx}`} className="h-8 md:h-10 w-auto object-contain" />
						</div>
					))}
				</div>

				<style jsx>{`
					.animate-marquee {
						display: flex;
						width: max-content;
						animation: marquee 20s linear infinite;
					}

					@keyframes marquee {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}
				`}</style>
			</div>
		</div>
	);
}
