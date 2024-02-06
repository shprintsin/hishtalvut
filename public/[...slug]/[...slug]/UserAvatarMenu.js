import React from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

export function UserAvatarMenu() {
    const user = {
        id: 1,
        name: "Shad Chn",
        email: "",
        avatarUrl: "/avatars/01.png",
        avatarFallback: "SC"
    };
    const links = [{ label: 'פרופיל', uri: "/profile" }, { label: 'הגדרות', uri: "/settings" }, { label: 'התנתק', uri: "/logout" }];
    const { id, name, email, avatarUrl, avatarFallback } = user;
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">
                        m@example.com
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                {links.map((item, index) => <DropdownMenuItem><Link href={item.uri}>{item.label}</Link></DropdownMenuItem>)}

            </DropdownMenuGroup>

        </DropdownMenuContent>
    </DropdownMenu>;
}
