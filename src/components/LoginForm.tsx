import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Chrome, Gamepad2 } from "lucide-react";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (provider: "microsoft" | "google") => {
    setIsLoading(true);
    toast(`Redirecting to ${provider === "microsoft" ? "Microsoft" : "Google"} login...`);
    
    // Simulate loading for now
    setTimeout(() => {
      setIsLoading(false);
      toast(`${provider === "microsoft" ? "Microsoft" : "Google"} login will be implemented!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-background to-red-950/30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Logo and Branding */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-12 h-12 text-primary animate-float" />
          </div>
          
          <h1 className="text-6xl font-gaming font-black bg-gradient-gaming bg-clip-text text-transparent animate-pulse-glow">
            Rxs Client
          </h1>
          
          <p className="text-lg text-muted-foreground font-medium">
            Premium Minecraft Bedrock Experience
          </p>
          
          <div className="w-24 h-1 bg-gradient-gaming mx-auto rounded-full"></div>
        </div>

        {/* Login Card */}
        <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-gaming">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-gaming text-foreground">
              Choose Your Login
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Select your preferred authentication method
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Microsoft Login Button */}
            <Button
              variant="microsoft"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              onClick={() => handleLogin("microsoft")}
              disabled={isLoading}
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              Continue with Microsoft
            </Button>

            {/* Google Login Button */}
            <Button
              variant="google"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              onClick={() => handleLogin("google")}
              disabled={isLoading}
            >
              <Chrome className="w-6 h-6 mr-3" />
              Continue with Google
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground">Secure Authentication</span>
              </div>
            </div>

            {/* Gaming Features Preview */}
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">What's waiting for you:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Enhanced Performance</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Custom Mods</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Better Graphics</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Anti-Cheat Safe</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>By continuing, you agree to our Terms of Service</p>
          <p className="mt-1 font-gaming text-primary">Rxs Client © 2024</p>
        </div>
      </div>
    </div>
  );
};