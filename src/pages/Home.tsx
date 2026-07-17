import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/06c65f9e-7d68-4749-9a38-2d63b2986e17/nigerian-smart-farming-ef80edad-1783618065419.webp')"}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Emetem Smart Irrigation</h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8">Empowering Nigerian farmers with AI-driven insights for a sustainable and prosperous future.</p>
          <Link to="/dashboard">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Core Features</h2>
          <p className="text-muted-foreground mb-12">Everything you need to bring smart farming to your fingertips.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-muted-foreground">Instant answers to your farming questions.</p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Irrigation Scheduling</h3>
              <p className="text-muted-foreground">Optimized water usage for your specific crops.</p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Weather Recommendations</h3>
              <p className="text-muted-foreground">Farm with confidence with weather-aware advice.</p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Farm Record Book</h3>
              <p className="text-muted-foreground">Track your farm's performance with ease.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
