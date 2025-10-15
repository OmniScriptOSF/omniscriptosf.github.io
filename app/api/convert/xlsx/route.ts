// File: app/api/convert/xlsx/route.ts
// What: API endpoint for server-side XLSX conversion
// Why: Enable browser-based Excel export from playground
// Related: app/playground/page.tsx, omniscript-converters

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'omniscript-parser';
import { XLSXConverter } from 'omniscript-converters';

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
    const converter = new XLSXConverter();
    const result = await converter.convert(document, { theme: theme || 'default' });
    
    return new NextResponse(new Uint8Array(result.buffer), {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="spreadsheet.xlsx"'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'XLSX conversion failed' },
      { status: 500 }
    );
  }
}
