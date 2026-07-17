import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { v4 as uuidv4 } from 'uuid';

export type FarmRecord = {
  id: string;
  crop: string;
  plantingDate: string;
  growthStage: string;
};

export default function FarmRecordBook() {
  const [records, setRecords] = useState<FarmRecord[]>([]);
  const [crop, setCrop] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const storedRecords = localStorage.getItem('farmRecords');
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('farmRecords', JSON.stringify(records));
  }, [records]);

  const handleSubmit = () => {
    if (!crop || !plantingDate || !growthStage) return;

    if (editingId) {
      setRecords(
        records.map((rec) =>
          rec.id === editingId ? { ...rec, crop, plantingDate, growthStage } : rec
        )
      );
    } else {
      setRecords([...records, { id: uuidv4(), crop, plantingDate, growthStage }]);
    }

    setCrop('');
    setPlantingDate('');
    setGrowthStage('');
    setEditingId(null);
  };

  const handleEdit = (record: FarmRecord) => {
    setEditingId(record.id);
    setCrop(record.crop);
    setPlantingDate(record.plantingDate);
    setGrowthStage(record.growthStage);
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((rec) => rec.id !== id));
  };
  
  const handleCancel = () => {
    setCrop('');
    setPlantingDate('');
    setGrowthStage('');
    setEditingId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Farm Record Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="Crop Name"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            />
            <Input
              type="date"
              placeholder="Planting Date"
              value={plantingDate}
              onChange={(e) => setPlantingDate(e.target.value)}
            />
            <Input
              placeholder="Growth Stage"
              value={growthStage}
              onChange={(e) => setGrowthStage(e.target.value)}
            />
            <div className="flex gap-2">
                <Button onClick={handleSubmit} className="w-full">{editingId ? 'Update Record' : 'Add Record'}</Button>
                {editingId && <Button onClick={handleCancel} className="w-full" variant='outline'>Cancel</Button>}
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                <TableHead>Planting Date</TableHead>
                <TableHead>Growth Stage</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.crop}</TableCell>
                  <TableCell>{record.plantingDate}</TableCell>
                  <TableCell>{record.growthStage}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(record)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(record.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
