import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function ProjectCard({ image, tags, link }) {
	return (
		<div className="w-full">
			<Card className="mb-2">
				<CardContent className="flex items-center justify-center h-55">
					<Link href={`/projects/${link}`}>
						<img src={image} />
					</Link>
				</CardContent>
			</Card>
			{tags &&
				tags.map((tag, index) => (
					<Badge className="mr-2 mt-2 opacity-50 px-2 py-1" key={index}>
						{tag}
					</Badge>
				))}
		</div>
	);
}
