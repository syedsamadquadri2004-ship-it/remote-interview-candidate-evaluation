"use client";
import { SignInButton } from "@clerk/nextjs";
import {
    Code2Icon,
    VideoIcon,
    UsersIcon,
    SparklesIcon,
    CheckCircle2Icon,
    ArrowRightIcon
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center -mt-10 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none overflow-hidden sm:block hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 py-16 text-center z-10">
                {/* Hero Section */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
                    <SparklesIcon className="size-4" />
                    <span>The Future of Remote Technical Hiring</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
                    Modern Interviews for <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Modern Teams</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                    The all-in-one platform for technical interviews. Integrated video calls,
                    real-time screening, and collaborative feedback—all in one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
                    <SignInButton mode="modal">
                        <button className="h-12 px-8 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-emerald-600/20 group">
                            Get Started
                            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </SignInButton>
                </div>

                {/* Feature Grid */}
                <div id="features" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left py-12">
                    <FeatureCard
                        icon={<VideoIcon className="size-6 text-emerald-500" />}
                        title="HD Video Calls"
                        description="Experience lag-free, high-definition video interviews optimized for low-latency globally."
                    />
                    <FeatureCard
                        icon={<Code2Icon className="size-6 text-teal-500" />}
                        title="Integrated Code Editor"
                        description="Write and execute code in multiple languages during live technical assessments."
                    />
                    <FeatureCard
                        icon={<UsersIcon className="size-6 text-emerald-600" />}
                        title="Recruiter Tools"
                        description="Comprehensive dashboard for scheduling, managing recordings, and team collaboration."
                    />
                </div>

            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="size-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2Icon className="size-4" />
                Verified Professional
            </div>
        </div>
    );
}
