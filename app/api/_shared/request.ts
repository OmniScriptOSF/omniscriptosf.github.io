// File: app/api/_shared/request.ts
// What: Shared request parsing and validation for OSF API routes
// Why: Keep conversion endpoints consistent and safe against malformed payloads
// Related: app/api/convert/*/route.ts

import { NextRequest } from 'next/server';

const DEFAULT_MAX_BODY_BYTES = 1_000_000;

export type OsfPayload = {
  osfCode: string;
  theme?: string;
};

export type OsfPayloadResult =
  | { ok: true; payload: OsfPayload }
  | { ok: false; error: string };

export async function readOsfPayload(request: NextRequest): Promise<OsfPayloadResult> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return { ok: false, error: 'Invalid JSON body' };
  }

  const data = body as { osfCode?: unknown; theme?: unknown };
  if (typeof data.osfCode !== 'string' || data.osfCode.trim() === '') {
    return { ok: false, error: 'Missing osfCode parameter' };
  }

  const maxBytesRaw = process.env.OSF_MAX_BODY_BYTES;
  const maxBytes = Number(maxBytesRaw ?? DEFAULT_MAX_BODY_BYTES);

  if (Number.isFinite(maxBytes) && Buffer.byteLength(data.osfCode, 'utf8') > maxBytes) {
    return { ok: false, error: `osfCode exceeds ${maxBytes} bytes` };
  }

  const theme = typeof data.theme === 'string' && data.theme.trim() !== '' ? data.theme : undefined;

  return {
    ok: true,
    payload: {
      osfCode: data.osfCode,
      theme
    }
  };
}
