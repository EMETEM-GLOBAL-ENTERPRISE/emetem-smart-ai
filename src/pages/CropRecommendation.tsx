import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const cropData = {
  'rainy': {
    'Lagos': ['Maize', 'Cassava', 'Vegetables'],
    'Kano': ['Rice', 'Millet', 'Sorghum'],
    'Ibadan': ['Yam', 'Maize', 'Cowpea'],
  },
  'dry': {
    'Lagos': ['Tomato', 'Pepper', 'Watermelon'],
    'Kano': ['Wheat', 'Onion', 'Garlic'],
    'Ibadan': ['Tomato', 'Okra', 'Sweet Potato'],
  },
};

type Season = keyof typeof cropData;
type Location = keyof typeof cropData[Season];

export default function CropRecommendation() {
  const [season, setSeason] = useState<Season | ''>('');
  const [location, setLocation] = useState<Location | ''>('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleRecommend = () => {
    if (season && location) {
      setRecommendations(cropData[season][location]);
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-primary">Crop Recommendation</CardTitle>
          <CardDescription>
            Select a season and location to get crop recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="season">Season</Label>
            <Select onValueChange={(value) => setSeason(value as Season)}>
              <SelectTrigger id="season">
                <SelectValue placeholder="Select a season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rainy">Rainy</SelectItem>
                <SelectItem value="dry">Dry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select onValueChange={(value) => setLocation(value as Location)}>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Lagos">Lagos</SelectItem>
                <SelectItem value="Kano">Kano</SelectItem>
                <SelectItem value="Ibadan">Ibadan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <Button onClick={handleRecommend} className="w-full mb-4">Get Recommendation</Button>
          {recommendations.length > 0 && (
            <div>
              <h3 className="font-semibold">Recommended Crops:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {recommendations.map((crop) => (
                  <li key={crop}>{crop}</li>
                ))}
              </ul>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}