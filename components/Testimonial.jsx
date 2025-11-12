import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Testimonial({ image, name, textEN, textRO }) {
	return (
		<Card className="w-full">
			<CardHeader className="flex items-center gap-4">
				<Avatar className="w-12 h-12">
					<AvatarImage src={image} />
					<AvatarFallback>{name[0]}</AvatarFallback>
				</Avatar>
				<CardTitle className="font-medium">
					<p className="text-xl">{name}</p>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="english">
					<TabsList>
						<TabsTrigger value="english">EN</TabsTrigger>
						<TabsTrigger value="romanian">RO</TabsTrigger>
					</TabsList>
					<TabsContent value="english">
						<p className="text-lg mt-4">{textEN}</p>
					</TabsContent>
					<TabsContent value="romanian">
						<p className="text-lg mt-4">{textRO}</p>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
