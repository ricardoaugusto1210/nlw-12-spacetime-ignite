import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Redireciona para página inicial
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      // max-age=0 apaga os cookies e token= não tem valor nenhum
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
