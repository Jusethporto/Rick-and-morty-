import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Redirigir usuarios autenticados que intentan acceder al login
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirigir usuarios no autenticados que intentan acceder al dashboard
  if (!token && pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',         // Aplicar middleware en la raíz
    '/dashboard' // Aplicar middleware en la ruta dashboard
  ],
};
