import MainLayout from "@/components/layout/main.layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart, Book, MessageSquare, Users } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="aurora-bg"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Transforming Education with Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              Empower your school with our cutting-edge management system
            </p>
            <Button className="animate-fade-in-up animation-delay-400 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-900 to-transparent"></div>
        </section>
        <Features />
        <Testimonials />
        <Pricing />
      </div>
    </MainLayout>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Book className="h-12 w-12" />,
      title: "Attendance Tracking",
      description:
        "Effortlessly monitor student attendance with our intuitive system.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Grade Management",
      description:
        "Streamline grading processes and provide timely feedback to students.",
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Parent-Teacher Communication",
      description:
        "Foster strong relationships with seamless communication tools.",
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Performance Analytics",
      description:
        "Gain valuable insights into student progress and school performance.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-purple-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This system has revolutionized how we manage our school. It's intuitive and powerful!",
      author: "Sarah Johnson, Principal",
    },
    {
      quote:
        "The parent-teacher communication feature has greatly improved our engagement with families.",
      author: "Mark Davis, Teacher",
    },
    {
      quote:
        "As a student, I love being able to track my progress and communicate easily with my teachers.",
      author: "Emily Chen, Student",
    },
  ];
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="aurora-card-bg"></div>
              <p className="text-lg mb-4 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-semibold relative z-10">
                - {testimonial.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: ["Attendance Tracking", "Grade Management", "Basic Reporting"],
    },
    {
      name: "Pro",
      price: "$199",
      features: [
        "All Basic features",
        "Parent-Teacher Communication",
        "Advanced Analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro features",
        "Custom Integrations",
        "Dedicated Support",
      ],
    },
  ];
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {plan.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-center mb-6">
                {plan.price}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Home;
