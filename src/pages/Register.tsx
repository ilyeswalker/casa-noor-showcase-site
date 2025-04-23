
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactPanel from "../components/ContactPanel";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulating an API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="font-playfair text-4xl text-center mb-8">Account Access</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm text-gray-600 mb-2">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-casanoor-blue hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-casanoor-blue" 
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm text-gray-600 mb-2">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm text-gray-600 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-email" className="block text-sm text-gray-600 mb-2">
                      Email
                    </label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="register-password" className="block text-sm text-gray-600 mb-2">
                      Password
                    </label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm text-gray-600 mb-2">
                      Confirm Password
                    </label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-casanoor-red" 
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <ContactPanel />
    </div>
  );
};

export default Register;
