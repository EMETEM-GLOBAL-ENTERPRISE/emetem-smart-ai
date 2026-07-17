import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="bg-card">
      <div className="container mx-auto p-4 md:p-8">
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-center text-4xl font-bold text-primary p-8">About Emetem Smart Irrigation</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10 text-lg text-muted-foreground space-y-6">
            <p>
              Emetem Smart Irrigation is an AI-powered platform designed to help smallholder farmers in Nigeria improve crop yields through climate-smart irrigation, weather-aware farming decisions, and efficient water management. Our mission is to bridge the technology gap for farmers, providing affordable and accessible tools to enhance productivity and sustainability.
            </p>
            <p>
              We believe in the power of technology to transform agriculture. By leveraging AI, we provide actionable insights that help farmers conserve water, reduce costs, and adapt to the challenges of climate change. Our platform is built to be simple, intuitive, and mobile-first, ensuring that every farmer can benefit, regardless of their technical literacy.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Value Proposition</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Check className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <span><span className="font-semibold">Increase Productivity:</span> Optimize your farming practices to achieve better yields and higher quality produce.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <span><span className="font-semibold">Conserve Water:</span> Implement smart irrigation schedules to reduce water waste and lower operational costs.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <span><span className="font-semibold">Adapt to Climate Change:</span> Make informed decisions with weather-based recommendations and resilient farming strategies.</span>
                </li>
                 <li className="flex items-start gap-4">
                  <Check className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <span><span className="font-semibold">Boost Food Security:</span> Contribute to a more food-secure Nigeria by adopting modern, sustainable agricultural practices.</span>
                </li>
              </ul>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
