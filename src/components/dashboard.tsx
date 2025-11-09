'use client';

import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  Home,
  LineChart,
  LogOut,
  Map,
  Settings,
  Siren,
  User,
  Image as ImageIcon,
} from 'lucide-react';
import Link from 'next/link';
import { format, formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuAction,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { CrimeAlert } from '@/lib/dummy-data';
import { AppLogo } from '@/components/logo';
import { Skeleton } from '@/components/ui/skeleton';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold text-sidebar-foreground">
      <AppLogo className="h-8 w-8" />
      <span className="group-data-[collapsible=icon]:hidden">Terra-Civitas</span>
    </Link>
  );
}

function SidebarCollapseButton() {
    const { toggleSidebar } = useSidebar();
    return (
        <SidebarMenuAction
            onClick={toggleSidebar}
            className="group-data-[collapsible=icon]:hidden absolute right-0 top-1/2 -translate-y-1/2"
        >
            <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-data-[state=collapsed]:rotate-180" />
        </SidebarMenuAction>
    );
}

function RelativeTime({ timestamp }: { timestamp: Date | string }) {
  const [relativeTime, setRelativeTime] = useState('');
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;

  useEffect(() => {
    const getFormattedRelativeTime = () => formatDistanceToNow(date, { addSuffix: true });
    
    setRelativeTime(getFormattedRelativeTime());

    const timer = setInterval(() => {
      setRelativeTime(getFormattedRelativeTime());
    }, 60000);

    return () => clearInterval(timer);
  }, [date]);

  if (!relativeTime) {
    return null;
  }

  return (
     <p suppressHydrationWarning title={format(date, 'PPPpp')}>
        {relativeTime}
      </p>
  );
}

export function Dashboard() {
  const [alerts, setAlerts] = useState<CrimeAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/alerts');
        if (!response.ok) {
          throw new Error('Failed to fetch alerts');
        }
        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        console.error(error);
        // Optionally, set an error state and display a message to the user
      } finally {
        setIsLoading(false);
      }
    }

    fetchAlerts();
  }, []);

  const getCategoryIcon = (category: CrimeAlert['category'], size: string = 'h-4 w-4') => {
    const iconProps = { className: cn(size, 'shrink-0') };
    switch (category) {
      case 'Theft':
        return <Siren {...iconProps} className={cn(iconProps.className, 'text-chart-1')} />;
      case 'Assault':
        return <Siren {...iconProps} className={cn(iconProps.className, 'text-chart-4')} />;
      case 'Vandalism':
        return <Siren {...iconProps} className={cn(iconProps.className, 'text-chart-3')} />;
      case 'Robbery':
        return <Siren {...iconProps} className={cn(iconProps.className, 'text-chart-5')} />;
      default:
        return <Siren {...iconProps} className={cn(iconProps.className, 'text-muted-foreground')} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="relative">
                <Logo />
                <SidebarCollapseButton />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive tooltip="Dashboard">
                  <Link href="/">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Alert Map">
                  <Link href="#">
                    <Map />
                    <span>Alert Map</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Analytics">
                  <Link href="#">
                    <LineChart />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto">
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Settings">
                        <Link href="#">
                            <Settings />
                            <span>Settings</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Logout">
                        <Link href="/login">
                            <LogOut />
                            <span>Logout</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full max-h-screen flex-col">
            <header className="flex h-14 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10 px-4 lg:h-[60px] lg:px-6">
              <SidebarTrigger />
              <div className="w-full flex-1">
                <h1 className="text-lg font-semibold">Dashboard</h1>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                      <Link href="/login">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col overflow-hidden">
                <div className="flex-1 p-4 lg:p-6">
                    <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>Crime Alerts</CardTitle>
                        <CardDescription>Real-time incidents in your area.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden">
                        <ScrollArea className="h-full">
                         {isLoading ? (
                            <div className="p-2 space-y-2">
                              {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-20 w-full rounded-lg" />
                              ))}
                            </div>
                          ) : (
                            <Accordion type="single" collapsible className="w-full p-2 pt-0">
                                {alerts.map((alert, index) => (
                                <AccordionItem value={alert.id} key={alert.id}>
                                    <AccordionTrigger className={cn("w-full text-left p-3 rounded-lg transition-colors hover:bg-muted/50 hover:no-underline", index === 0 && "bg-primary/10")}>
                                        <div className="flex items-start gap-3 w-full">
                                        <div className="mt-1">{getCategoryIcon(alert.category)}</div>
                                        <div className="flex-1 text-left">
                                            <p className="font-semibold">{alert.title}</p>
                                            <div className="text-xs text-muted-foreground">
                                                <RelativeTime timestamp={alert.timestamp} />
                                            </div>
                                        </div>
                                        {alert.imageUrl && (
                                            <div className="relative h-12 w-12 rounded-md overflow-hidden shrink-0 ml-auto">
                                                <Image src={alert.imageUrl} alt="Alert image" layout="fill" objectFit="cover" />
                                            </div>
                                        )}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-3 pl-12 text-sm text-muted-foreground">
                                        {alert.description}
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
                         )}
                        </ScrollArea>
                    </CardContent>
                    </Card>
                </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
