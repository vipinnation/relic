"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/input-field";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, LockIcon, Mail } from "lucide-react";
import MainLayout from "@/components/layout/main.layout";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    try {
      setIsLoading(true);
      setShowPassword(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 min-h-[80vh] py-4">
        <Card className="bg-white dark:bg-gray-900 shadow-md rounded-md p-4 max-w-md w-full">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-gray-900 dark:text-white">
              Welcome Back
            </CardTitle>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to your account
            </p>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <InputField
                name="email"
                placeholder="Enter your email"
                label="Email"
                startIcon={<Mail />}
                error={errors.email as any}
                InputProps={register("email", {
                  required: "Email is required",
                })}
                disabled={isLoading}
              />
              <div className="relative">
                <InputField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  label="Password"
                  startIcon={<LockIcon />}
                  endIcon={
                    showPassword ? (
                      <EyeOff
                        className="cursor-pointer dark:text-gray-400"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <Eye
                        className="cursor-pointer dark:text-gray-400"
                        onClick={() => setShowPassword(true)}
                      />
                    )
                  }
                  disabled={isLoading}
                  error={errors.password as any}
                  InputProps={register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              <Button type="submit" className="w-full" loading={isLoading}>
                Sign In
              </Button>
            </CardContent>
          </form>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Forgot password?
            </a>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Don't have an account? Sign up
            </a>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
