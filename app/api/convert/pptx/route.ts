// File: app/api/convert/pptx/route.ts
// What: API endpoint for server-side PPTX conversion
// Why: Enable browser-based PowerPoint export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { PPTXConverter } from 'omniscript-converters';
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
    const converter = new PPTXConverter();
    const result = await converter.convert(document, {
      theme: payload.payload.theme || 'default'
    });

    const response = new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': 'attachment; filename="presentation.pptx"'
      }
    });

    return withCors(request, response);
  } catch (error: any) {
    return withCors(
      request,
      NextResponse.json(
        { error: error.message || 'PPTX conversion failed' },
        { status: 500 }
      )
    );
  }
}
