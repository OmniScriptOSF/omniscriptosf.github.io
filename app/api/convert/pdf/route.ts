// File: app/api/convert/pdf/route.ts
// What: API endpoint for server-side PDF conversion
// Why: Enable browser-based PDF export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { PDFConverter } from 'omniscript-converters';
import { handleCorsPreflight, withCors } from '@/app/api/_shared/cors';
import { readOsfPayload } from '@/app/api/_shared/request';

export async function OPTIONS(request: NextRequest) {
  return handleCorsPreflight(request);
}

export async function POST(request: NextRequest) {
  try {
    const payload = await readOsfPayload(request);

    if (!payload.ok) {
      return withCors(
        request,
        NextResponse.json({ error: payload.error }, { status: 400 })
      );
    }

    const document = parse(payload.payload.osfCode);
    const converter = new PDFConverter();
    const result = await converter.convert(document, {
      theme: payload.payload.theme || 'default'
    });

    const response = new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"'
      }
    });

    return withCors(request, response);
  } catch (error: any) {
    return withCors(
      request,
      NextResponse.json(
        { error: error.message || 'PDF conversion failed' },
        { status: 500 }
      )
    );
  }
}
