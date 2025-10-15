// File: app/api/convert/docx/route.ts
// What: API endpoint for server-side DOCX conversion
// Why: Enable browser-based Word export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { DOCXConverter } from 'omniscript-converters';

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
    const converter = new DOCXConverter();
    const result = await converter.convert(document, { theme: theme || 'default' });
    
    return new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="document.docx"'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'DOCX conversion failed' },
      { status: 500 }
    );
  }
}
