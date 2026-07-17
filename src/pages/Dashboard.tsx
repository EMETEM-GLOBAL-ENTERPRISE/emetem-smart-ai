import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FarmRecord } from './FarmRecordBook';
import { Sun, Cloud, CloudRain, Droplets, Calendar } from 'lucide-react';

const mockWeather = {
  location: 'Lagos, Nigeria',
  temperature: '28°C',
  condition: 'Partly Cloudy',
  icon: <Cloud className="w-12 h-12 text-blue-400" />,
};

const getIrrigationSchedule = (records: FarmRecord[]) => {
    if (records.length === 0) {
        return [{ crop: 'No crops added yet', nextIrrigation: 'N/A' }];
    }

    return records.map(record => {
        let nextIrrigation = 'Tomorrow';
        if (record.growthStage.toLowerCase().includes('seedling')) {
            nextIrrigation = 'In 2 days';
        } else if (record.growthStage.toLowerCase().includes('flowering')) {
            nextIrrigation = 'Tomorrow morning';
        }
        return {
            crop: record.crop,
            nextIrrigation
        }
    })
}

export default function Dashboard() {
  const [records, setRecords] = useState<FarmRecord[]>([]);

  useEffect(() => {
    const storedRecords = localStorage.getItem('farmRecords');
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  const irrigationSchedule = getIrrigationSchedule(records);

  return (
    <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
            <Link to="/farm-record-book">
                <Button>Manage Farm Records</Button>
            </Link>
        </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weather</CardTitle>
            {mockWeather.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockWeather.temperature}</div>
            <p className="text-xs text-muted-foreground">{mockWeather.condition} in {mockWeather.location}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Crops</CardTitle>
             <Droplets className="w-8 h-8 text-green-500" />
          </CardHeader>
          <CardContent>
             {records.length > 0 ? (
                <ul className="list-inside list-disc">
                    {records.map(r => <li key={r.id}>{r.crop} ({r.growthStage})</li>)}
                </ul>
             ) : (
                <p className="text-sm text-muted-foreground">No crops added yet.</p>
             )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Irrigation Schedule</CardTitle>
            <Calendar className="w-8 h-8 text-blue-500" />
          </CardHeader>
          <CardContent>
            {irrigationSchedule.map((item, index) => (
                <div key={index} className="text-sm">
                    <span className="font-semibold">{item.crop}: </span>
                    <span className="text-muted-foreground">{item.nextIrrigation}</span>
                </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}