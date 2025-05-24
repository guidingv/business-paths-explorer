
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Cookie, Settings, X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(onlyNecessary);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-traveler-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">We value your privacy</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{" "}
                    <a href="/privacy-policy" className="text-traveler-blue hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="text-sm"
                >
                  Reject All
                </Button>
                
                <Sheet open={showSettings} onOpenChange={setShowSettings}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="text-sm">
                      <Settings className="h-4 w-4 mr-1" />
                      Customize
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle>Cookie Preferences</SheetTitle>
                      <SheetDescription>
                        Manage your cookie preferences. You can enable or disable different types of cookies below.
                      </SheetDescription>
                    </SheetHeader>
                    
                    <div className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Necessary Cookies</h4>
                            <p className="text-sm text-gray-500">
                              Essential for the website to function properly. Cannot be disabled.
                            </p>
                          </div>
                          <Switch checked={true} disabled className="opacity-50" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Analytics Cookies</h4>
                            <p className="text-sm text-gray-500">
                              Help us understand how visitors interact with our website.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => updatePreference('analytics', checked)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Marketing Cookies</h4>
                            <p className="text-sm text-gray-500">
                              Used to deliver personalized advertisements and track ad performance.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => updatePreference('marketing', checked)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Functional Cookies</h4>
                            <p className="text-sm text-gray-500">
                              Enable enhanced functionality and personalization.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.functional}
                            onCheckedChange={(checked) => updatePreference('functional', checked)}
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 pt-4 border-t">
                        <Button 
                          onClick={() => savePreferences(preferences)}
                          className="w-full"
                        >
                          Save Preferences
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={acceptAll}
                          className="w-full"
                        >
                          Accept All
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Button
                  onClick={acceptAll}
                  className="bg-traveler-blue hover:bg-blue-700 text-sm"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookieBanner;
