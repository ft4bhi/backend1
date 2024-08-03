import { db, UsersTable } from '@/lib/drizzle';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const client = await db.select().from(UsersTable);
  const response = NextResponse.json(client);
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate'); // or appropriate caching strategy
  return response;
}

export async function POST(request: Request) {
  const body = await request.json();
  await db.insert(UsersTable).values(body).execute();
  return NextResponse.json(body);
}
