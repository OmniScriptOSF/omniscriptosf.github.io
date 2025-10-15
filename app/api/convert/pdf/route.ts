// File: app/api/convert/pdf/route.ts
// What: API endpoint for server-side PDF conversion
// Why: Enable browser-based PDF export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { PDFConverter } from 'omniscript-converters';

export async function POST(request: NextRequest) {
  try {
    const { osfCode, theme } = await request.json();
    
    if (!osfCode) {
      return NextResponse.json(
        { error: 'Missing osfCode parameter' },
        { status: 400 }
      );
    }
    
    const document = parse(osfCode);
    const converter = new PDFConverter();
    const result = await converter.convert(document, { theme: theme || 'default' });
    
    return new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'PDF conversion failed' },
      { status: 500 }
    );
  }
}
