import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Video, Headphones, FileText, Search, Filter, Play, Download } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'video', name: 'Videos', count: 8, icon: Video },
    { id: 'audio', name: 'Audio', count: 6, icon: Headphones },
    { id: 'pdf', name: 'Articles', count: 10, icon: FileText },
  ];

  const resources = [
    {
      id: '1',
      title: 'Understanding Anxiety: A Complete Guide',
      description: 'Learn about anxiety symptoms, causes, and coping strategies',
      category: 'pdf',
      duration: '15 min read',
      tags: ['Anxiety', 'Coping Skills', 'Mental Health'],
      rating: 4.8,
      views: 1250,
      thumbnail: '/api/placeholder/300/200',
    },
    {
      id: '2',
      title: 'Guided Meditation for Stress Relief',
      description: 'A 10-minute guided meditation to help reduce stress and anxiety',
      category: 'audio',
      duration: '10 min',
      tags: ['Meditation', 'Stress Relief', 'Mindfulness'],
      rating: 4.9,
      views: 890,
      thumbnail: '/api/placeholder/300/200',
    },
    {
      id: '3',
      title: 'Cognitive Behavioral Therapy Techniques',
      description: 'Learn practical CBT techniques for managing negative thoughts',
      category: 'video',
      duration: '25 min',
      tags: ['CBT', 'Therapy', 'Depression'],
      rating: 4.7,
      views: 2100,
      thumbnail: '/api/placeholder/300/200',
    },
    {
      id: '4',
      title: 'Building Healthy Sleep Habits',
      description: 'Tips and strategies for improving your sleep quality',
      category: 'pdf',
      duration: '8 min read',
      tags: ['Sleep', 'Wellness', 'Health'],
      rating: 4.6,
      views: 750,
      thumbnail: '/api/placeholder/300/200',
    },
    {
      id: '5',
      title: 'Mindfulness for Students',
      description: 'Practical mindfulness exercises designed for busy students',
      category: 'video',
      duration: '18 min',
      tags: ['Mindfulness', 'Students', 'Focus'],
      rating: 4.8,
      views: 1680,
      thumbnail: '/api/placeholder/300/200',
    },
    {
      id: '6',
      title: 'Breathing Exercises for Panic Attacks',
      description: 'Quick breathing techniques to manage panic and anxiety',
      category: 'audio',
      duration: '5 min',
      tags: ['Panic', 'Breathing', 'Emergency'],
      rating: 4.9,
      views: 920,
      thumbnail: '/api/placeholder/300/200',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'pdf': return FileText;
      default: return BookOpen;
    }
  };

  const getActionButton = (category: string) => {
    switch (category) {
      case 'video':
        return (
          <Button size="sm" className="w-full">
            <Play className="h-4 w-4 mr-2" />
            Watch
          </Button>
        );
      case 'audio':
        return (
          <Button size="sm" className="w-full">
            <Play className="h-4 w-4 mr-2" />
            Listen
          </Button>
        );
      case 'pdf':
        return (
          <Button size="sm" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            Read
          </Button>
        );
      default:
        return (
          <Button size="sm" className="w-full">
            <BookOpen className="h-4 w-4 mr-2" />
            Open
          </Button>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
            Mental Health Resources
          </h1>
          <p className="text-gray-600 mt-2">
            Access educational materials, guided exercises, and helpful tools for your mental wellness journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon || Filter;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const CategoryIcon = getCategoryIcon(resource.category);
            return (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <CategoryIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <Badge 
                    className="absolute top-2 right-2 bg-white text-gray-700" 
                    variant="secondary"
                  >
                    {resource.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>⭐ {resource.rating}/5</span>
                      <span>{resource.views} views</span>
                    </div>

                    <div className="flex gap-2">
                      {getActionButton(resource.category)}
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <Card className="mt-8">
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Resources Found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Need More Help?</CardTitle>
            <CardDescription className="text-blue-700">
              Can't find what you're looking for? Our team is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Support
              </Button>
              <Button variant="outline" className="flex-1">
                <BookOpen className="h-4 w-4 mr-2" />
                Request Resource
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;