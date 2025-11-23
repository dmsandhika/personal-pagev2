import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useForm } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent } from 'react';

const Contact = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        post('/contact', {
            onSuccess: () => {
                toast({
                    title: 'Message sent!',
                    description: 'Thank you for your message. I will get back to you soon.',
                });
                reset();
            },
            onError: () => {
                toast({
                    title: 'Error',
                    description: 'Failed to send message. Please try again.',
                    variant: 'destructive',
                });
            },
        });
    };

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
                                        <p className="text-muted-foreground">dmsandhika87@gmail.com</p>
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
                                        <p className="text-muted-foreground">+62 896 3014 7925</p>
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
                                        <p className="text-muted-foreground">Semarang, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    placeholder="Your Name"
                                    className="bg-card border-border"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-card border-border"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Subject"
                                    className="bg-card border-border"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    required
                                />
                                {errors.subject && <p className="text-destructive mt-1 text-sm">{errors.subject}</p>}
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="bg-card border-border resize-none"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    required
                                />
                                {errors.message && <p className="text-destructive mt-1 text-sm">{errors.message}</p>}
                            </div>
                            <Button type="submit" className="w-full" size="lg" disabled={processing}>
                                {processing ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
