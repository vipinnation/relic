"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/input-field";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Eye, EyeOff, LockIcon, Mail } from "lucide-react";
import MainLayout from "@/components/layout/main.layout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout>
      <div className="flex items-center justify-center bg-gray-100 h-full">
        <Card className="bg-white shadow-md rounded-md p-4 max-w-md w-full">
          <CardHeader className="space-y-2 text-center">
            <CardTitle>Welcome Back</CardTitle>
            <p className="text-gray-500">Sign in to your account</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <InputField
              name="email"
              placeholder="Enter your email"
              label="Email"
              startIcon={<Mail />}
            />
            <div className="relative">
              <InputField
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                label="Password"
                startIcon={<LockIcon />}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </CardContent>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Forgot password?
            </a>
            <a href="#" className="hover:text-gray-700">
              Don't have an account? Sign up
            </a>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
