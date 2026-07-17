import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Wind, Sun, Sprout } from "lucide-react";

const tips = [
    {
        icon: <Droplet className="w-8 h-8 text-blue-500" />,
        title: "Use Drip Irrigation",
        description: "Drip irrigation systems deliver water directly to the plant's roots, reducing evaporation and water runoff. This method is up to 90% more efficient than traditional sprinkler systems."
    },
    {
        icon: <Sprout className="w-8 h-8 text-green-500" />,
        title: "Apply Mulch",
        description: "Add a layer of organic mulch (like straw, wood chips, or compost) around your plants. Mulch helps retain soil moisture, suppress weeds, and regulate soil temperature."
    },
    {
        icon: <Sun className="w-8 h-8 text-yellow-500" />,
        title: "Water at the Right Time",
        description: "Water your crops early in the morning or late in the evening. Watering during the heat of the day causes significant water loss to evaporation."
    },
    {
        icon: <Wind className="w-8 h-8 text-gray-400" />,
        title: "Create Windbreaks",
        description: "Planting trees or shrubs as windbreaks can reduce wind speed across your fields, which in turn reduces soil moisture evaporation."
    },
];

export default function Resources() {
  return (
    <div className="container mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary">Soil & Water Conservation</h1>
            <p className="text-lg text-muted-foreground mt-2">Practical tips for sustainable farming.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
                 <Card key={index} className="flex items-start p-6 gap-6">
                    <div className="flex-shrink-0">{tip.icon}</div>
                    <div>
                       <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                       <CardContent className="p-0 text-muted-foreground">
                           {tip.description}
                       </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  );
}
