// File: app/api/_shared/cors.ts
// What: CORS helpers for OSF API routes
// Why: Allow the playground to call the API securely across origins
// Related: app/api/convert/*/route.ts

import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://omniscriptosf.github.io',
  'http://localhost:3000'
];

function getAllowedOrigins(): string[] {
  const fromEnv = process.env.OSF_ALLOWED_ORIGINS;
  if (!fromEnv) return DEFAULT_ALLOWED_ORIGINS;

  return fromEnv
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function resolveAllowOrigin(origin: string | null, allowedOrigins: string[]): string | null {
  if (!origin) {
    return allowedOrigins.includes('*') ? '*' : allowedOrigins[0] || null;
  }

  if (allowedOrigins.includes('*')) return '*';
  if (allowedOrigins.includes(origin)) return origin;
  return null;
}

export function withCors(request: NextRequest, response: NextResponse): NextResponse {
  const allowedOrigins = getAllowedOrigins();
  const origin = request.headers.get('origin');
  const allowOrigin = resolveAllowOrigin(origin, allowedOrigins);

  if (allowOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    response.headers.set('Access-Control-Max-Age', '86400');
    response.headers.set('Vary', 'Origin');
  }

  return response;
}

export function handleCorsPreflight(request: NextRequest): NextResponse {
  return withCors(request, new NextResponse(null, { status: 204 }));
}
