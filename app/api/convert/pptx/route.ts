// File: app/api/convert/pptx/route.ts
// What: API endpoint for server-side PPTX conversion
// Why: Enable browser-based PowerPoint export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { PPTXConverter } from 'omniscript-converters';

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
    const converter = new PPTXConverter();
    const result = await converter.convert(document, { theme: theme || 'default' });
    
    return new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': 'attachment; filename="presentation.pptx"'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'PPTX conversion failed' },
      { status: 500 }
    );
  }
}
