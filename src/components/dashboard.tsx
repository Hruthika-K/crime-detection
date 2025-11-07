'use client';

import { useState } from 'react';
import {
  Home,
  LineChart,
  LogOut,
  Map,
  Settings,
  ShieldAlert,
  Siren,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { format, formatDistanceToNow } from 'date-fns';

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
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { CrimeAlert } from '@/lib/dummy-data';
import { dummyAlerts } from '@/lib/dummy-data';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold text-sidebar-foreground">
      <Siren className="h-6 w-6 text-primary" />
      <span>Terra-Civitas</span>
    </Link>
  );
}

export function Dashboard() {
  const [selectedAlert, setSelectedAlert] = useState<CrimeAlert | null>(dummyAlerts[0]);

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
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Map className="h-4 w-4" />
                    Alert Map
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <LineChart className="h-4 w-4" />
                    Analytics
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto">
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="#">
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/login">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10 px-4 lg:h-[60px] lg:px-6">
              <SidebarTrigger className="md:hidden" />
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
            <main className="flex flex-1 flex-col gap-4 p-4 lg:flex-row lg:gap-6 lg:p-6">
              <div className="flex w-full flex-col lg:w-2/5 xl:w-1/3">
                <Card className="flex-1 flex flex-col">
                  <CardHeader>
                    <CardTitle>Crime Alerts</CardTitle>
                    <CardDescription>Real-time incidents in your area.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 p-0">
                    <ScrollArea className="h-full max-h-[calc(100vh-16rem)]">
                      <div className="flex flex-col gap-1 p-2 pt-0">
                        {dummyAlerts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).map((alert) => (
                          <button
                            key={alert.id}
                            onClick={() => setSelectedAlert(alert)}
                            className={cn(
                              'w-full text-left p-3 rounded-lg transition-colors',
                              selectedAlert?.id === alert.id
                                ? 'bg-accent text-accent-foreground'
                                : 'hover:bg-muted/50'
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">{getCategoryIcon(alert.category)}</div>
                              <div className="flex-1">
                                <p className="font-semibold">{alert.title}</p>
                                <p className="text-sm text-muted-foreground">{alert.location}</p>
                                <p className="text-xs text-muted-foreground">
                                  {formatDistanceToNow(alert.timestamp, { addSuffix: true })}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <Card className="h-full">
                  {selectedAlert ? (
                    <ScrollArea className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                              <CardTitle className="text-2xl">{selectedAlert.title}</CardTitle>
                              <CardDescription>{selectedAlert.location}</CardDescription>
                            </div>
                            {getCategoryIcon(selectedAlert.category, 'h-8 w-8')}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-muted-foreground">Category</p>
                            <p>{selectedAlert.category}</p>
                          </div>
                          <div>
                            <p className="font-medium text-muted-foreground">Reported</p>
                            <p title={format(selectedAlert.timestamp, 'PPPpp')}>
                              {formatDistanceToNow(selectedAlert.timestamp, { addSuffix: true })}
                            </p>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <p className="font-medium text-muted-foreground">Description</p>
                          <p className="mt-1">{selectedAlert.description}</p>
                        </div>
                      </CardContent>
                    </ScrollArea>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-center p-6">
                      <ShieldAlert className="h-16 w-16 text-muted-foreground/30" />
                      <h3 className="mt-4 text-lg font-semibold">Select an Alert</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Choose an alert from the list to view its details.
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
