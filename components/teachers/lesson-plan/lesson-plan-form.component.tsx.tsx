'use client'

import { useState } from 'react'
import { useLessonPlanData, LessonPlan, Material } from '@/utils/lessonPlanData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { PlusCircle, X } from 'lucide-react'

export default function LessonPlanForm() {
  const { saveLessonPlan } = useLessonPlanData()
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [materials, setMaterials] = useState<Material[]>([])
  const [sharedWith, setSharedWith] = useState<string[]>([])

  const handleAddMaterial = () => {
    setMaterials([...materials, { id: Date.now().toString(), name: '', type: 'pdf', url: '' }])
  }

  const handleRemoveMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id))
  }

  const handleMaterialChange = (id: string, field: keyof Material, value: string) => {
    setMaterials(materials.map(m => m.id === id ? { ...m, [field]: value } : m))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newLessonPlan: LessonPlan = {
      id: Date.now().toString(),
      title,
      subject,
      description,
      date,
      materials,
      sharedWith,
    }
    saveLessonPlan(newLessonPlan)
    // Reset form
    setTitle('')
    setSubject('')
    setDescription('')
    setDate('')
    setMaterials([])
    setSharedWith([])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Lesson Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div>
            <Label>Materials</Label>
            {materials.map((material, index) => (
              <div key={material.id} className="flex items-center space-x-2 mt-2">
                <Input
                  placeholder="Material name"
                  value={material.name}
                  onChange={(e) => handleMaterialChange(material.id, 'name', e.target.value)}
                  required
                />
                <Select
                  value={material.type}
                  onValueChange={(value) => handleMaterialChange(material.id, 'type', value as 'pdf' | 'presentation' | 'video')}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="presentation">Presentation</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="URL"
                  value={material.url}
                  onChange={(e) => handleMaterialChange(material.id, 'url', e.target.value)}
                  required
                />
                <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveMaterial(material.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" size="sm" onClick={handleAddMaterial} className="mt-2">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </div>
          <div>
            <Label>Share with</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id="students"
                checked={sharedWith.includes('students')}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSharedWith([...sharedWith, 'students'])
                  } else {
                    setSharedWith(sharedWith.filter(group => group !== 'students'))
                  }
                }}
              />
              <Label htmlFor="students">Students</Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id="administrators"
                checked={sharedWith.includes('administrators')}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSharedWith([...sharedWith, 'administrators'])
                  } else {
                    setSharedWith(sharedWith.filter(group => group !== 'administrators'))
                  }
                }}
              />
              <Label htmlFor="administrators">Administrators</Label>
            </div>
          </div>
          <Button type="submit">Create Lesson Plan</Button>
        </form>
      </CardContent>
    </Card>
  )
}

