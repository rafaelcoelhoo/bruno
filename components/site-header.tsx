'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, site } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </Button>
          <Button asChild size="icon" className="sm:hidden" aria-label={`Ligar para ${site.phone}`}>
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-display">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Navegação móvel" className="px-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href} className="border-b border-border last:border-0">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-3 font-display text-lg font-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
