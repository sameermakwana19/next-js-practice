export async function GET() {
  return Response.json({ status: 200, body: "Not implemented" });
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({ status: 201, body: data.text });
}
