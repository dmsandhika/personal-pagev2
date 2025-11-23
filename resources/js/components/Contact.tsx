import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back
                        to you!
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <div className="bg-card border-border shadow-card rounded-lg border p-6">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        <Mail className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">contact@example.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border-border shadow-card rounded-lg border p-6">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        <Phone className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground">+62 123 4567 890</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border-border shadow-card rounded-lg border p-6">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        <MapPin className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="text-muted-foreground">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <Input placeholder="Your Name" className="bg-card border-border" />
                            </div>
                            <div>
                                <Input type="email" placeholder="Your Email" className="bg-card border-border" />
                            </div>
                            <div>
                                <Input placeholder="Subject" className="bg-card border-border" />
                            </div>
                            <div>
                                <Textarea placeholder="Your Message" rows={5} className="bg-card border-border resize-none" />
                            </div>
                            <Button className="w-full" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
