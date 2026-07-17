import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto p-4 md:p-8">
        <Card>
             <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-primary">Contact Us</CardTitle>
                <CardDescription className="text-lg">We'd love to hear from you. Reach out with any questions or feedback.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="text-primary w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground">Send us an email and we'll get back to you shortly.</p>
                            <a href="mailto:info@emetem.com" className="text-primary hover:underline">info@emetem.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-primary w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Give us a call during business hours.</p>
                            <a href="tel:+234123456789" className="text-primary hover:underline">+234 123 456 789</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-primary w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Office</h3>
                            <p className="text-muted-foreground">123 Green Valley, Abuja, Nigeria</p>
                        </div>
                    </div>
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your Message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}