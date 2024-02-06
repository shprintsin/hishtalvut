import { FaGithub, FaGoogle } from "react-icons/fa";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';



export function CreateAccountCard() {
  return <Card>
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">התחברות</CardTitle>
      <CardDescription>
        הזן את הפרטים שלך כדי להתחבר:
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4 ">
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline" className="flex gap-2">
          <FaGithub />Github</Button>
        <Button variant="outline" className="flex gap-2">
          <FaGoogle />
          Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            או המשך באמצעות:
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">אימייל</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">סיסמא</Label>
        <Input id="password" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">התחבר</Button>
    </CardFooter>
  </Card>;
}
