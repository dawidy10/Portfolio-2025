import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function ProjectCard({ image, tags, link }) {
	return (
		<div className="w-full">
			<Card className="mb-2">
				<CardContent className="flex items-center justify-center py-6  h-36">
					<img src={image} />
				</CardContent>
			</Card>
			{tags &&
				tags.map((tag, index) => (
					<Badge className="mr-2 mt-2 opacity-50" key={index}>
						{tag}
					</Badge>
				))}
		</div>
	);
}
